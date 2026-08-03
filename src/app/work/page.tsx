import WorkSection from "@/components/work/WorkSection";

export const metadata = {
  title: "Work & Projects — Nouman A Khan",
  description: "Featured production projects, full-stack web platforms, government portals, and AI systems built by Nouman A Khan.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <WorkSection />
    </div>
  );
}
