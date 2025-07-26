import MacosDesktop from "react-macos-desktop";

export default function ProjectsSection() {
  return (
    <div className="w-[90vw] mx-auto flex items-center justify-center bg-white dark:bg-[#0B0B0F] rounded-xl p-4">
      <div className="transform scale-[0.8]">
        <MacosDesktop />
      </div>
    </div>
  );
}
