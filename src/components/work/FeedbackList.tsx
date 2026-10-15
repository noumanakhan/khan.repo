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
          <MessageSquare className="h-4 w-4 text-[#27322a]" />
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-600 font-bold">
            Client &amp; User Feedback ({feedbackList.length})
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#e2e6e2] bg-white px-3 py-1.5 text-xs font-semibold text-[#090b09] transition-colors hover:border-[#27322a]/40 hover:bg-[#f4f6f4] cursor-pointer shadow-xs"
        >
          <Plus className="h-3.5 w-3.5 text-[#27322a]" />
          {showAddForm ? "Cancel" : "Add Mock Feedback"}
        </button>
      </div>

      {showAddForm && (
        <form
          onSubmit={handleAddFeedback}
          className="rounded-xl border border-[#e2e6e2] bg-white p-5 space-y-4 shadow-sm backdrop-blur-sm"
        >
          <h4 className="text-sm font-bold text-[#090b09]">Add a Mock Feedback / Review</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs text-slate-600 mb-1 font-mono">Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                className="w-full rounded-lg border border-[#e2e6e2] bg-[#f4f6f4] px-3 py-2 text-sm text-[#090b09] placeholder-slate-400 focus:border-[#d9fea4] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-600 mb-1 font-mono">Role / Company</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Product Owner"
                className="w-full rounded-lg border border-[#e2e6e2] bg-[#f4f6f4] px-3 py-2 text-sm text-[#090b09] placeholder-slate-400 focus:border-[#d9fea4] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-600 mb-1 font-mono font-medium">Comment / Testimonial *</label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write client testimonial or feedback comment..."
              className="w-full rounded-lg border border-[#e2e6e2] bg-[#f4f6f4] px-3 py-2 text-sm text-[#090b09] placeholder-slate-400 focus:border-[#d9fea4] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[#d9fea4] hover:bg-[#c6f584] text-[#27322a] px-4 py-2 text-xs font-bold transition-colors cursor-pointer border border-[#c6f584]/60 shadow-xs"
          >
            Save Feedback
          </button>
        </form>
      )}

      {feedbackList.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#e2e6e2] bg-white/40 p-8 text-center">
          <MessageSquare className="mx-auto h-8 w-8 text-slate-400" />
          <p className="mt-2 text-sm font-medium text-slate-600">
            No feedback entries added yet.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Click &ldquo;Add Mock Feedback&rdquo; above or edit <code className="font-mono text-[#27322a]">src/data/projects.ts</code> to display client reviews.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {feedbackList.map((item, i) => (
            <blockquote
              key={i}
              className="flex flex-col justify-between gap-4 rounded-xl border border-[#e2e6e2] bg-white p-5 shadow-xs backdrop-blur-sm transition hover:border-[#27322a]/30"
            >
              <p className="text-sm leading-relaxed text-[#525854] italic">
                &ldquo;{item.comment}&rdquo;
              </p>
              <footer className="mt-auto flex items-center gap-3 pt-3 border-t border-[#e2e6e2]">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-9 w-9 rounded-full object-cover border border-[#e2e6e2]"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#27322a] text-[#d9fea4] border border-[#3a473e]">
                    <User className="h-4 w-4" />
                  </div>
                )}
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-[#090b09]">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}
