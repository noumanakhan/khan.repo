"use client";

import { useState } from "react";
import { FeedbackItem } from "@/data/types";
import { MessageSquare, User, Plus } from "lucide-react";

export default function FeedbackList({
  feedback: initialFeedback,
}: {
  feedback: FeedbackItem[];
}) {
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>(initialFeedback || []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [comment, setComment] = useState("");

  const handleAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newItem: FeedbackItem = {
      name: name.trim(),
      role: role.trim() || "Mock User / Reviewer",
      comment: comment.trim(),
    };

    setFeedbackList([newItem, ...feedbackList]);
    setName("");
    setRole("");
    setComment("");
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-blue-400" />
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Client & User Feedback ({feedbackList.length})
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-slate-800 hover:text-white"
        >
          <Plus className="h-3.5 w-3.5 text-blue-400" />
          {showAddForm ? "Cancel" : "Add Mock Feedback"}
        </button>
      </div>

      {showAddForm && (
        <form
          onSubmit={handleAddFeedback}
          className="rounded-xl border border-blue-500/30 bg-slate-900/90 p-5 space-y-4 backdrop-blur-sm"
        >
          <h4 className="text-sm font-semibold text-white">Add a Mock Feedback / Review</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs text-slate-400 mb-1 font-mono">Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                className="w-full rounded-lg border border-slate-800 bg-[#0d0d0d] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1 font-mono">Role / Company</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Product Owner"
                className="w-full rounded-lg border border-slate-800 bg-[#0d0d0d] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1 font-mono font-medium">Comment / Testimonial *</label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write client testimonial or feedback comment..."
              className="w-full rounded-lg border border-slate-800 bg-[#0d0d0d] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Save Feedback
          </button>
        </form>
      )}

      {feedbackList.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-800 bg-[#0d0d0d]/40 p-8 text-center">
          <MessageSquare className="mx-auto h-8 w-8 text-slate-600" />
          <p className="mt-2 text-sm font-medium text-slate-400">
            No feedback entries added yet.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Click &ldquo;Add Mock Feedback&rdquo; above or edit <code className="font-mono text-blue-400">src/data/projects.ts</code> to display client reviews.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {feedbackList.map((item, i) => (
            <blockquote
              key={i}
              className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-sm transition hover:border-slate-700"
            >
              <p className="text-sm leading-relaxed text-slate-300 italic">
                &ldquo;{item.comment}&rdquo;
              </p>
              <footer className="mt-auto flex items-center gap-3 pt-3 border-t border-slate-800/60">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-9 w-9 rounded-full object-cover border border-slate-700"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <User className="h-4 w-4" />
                  </div>
                )}
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}
