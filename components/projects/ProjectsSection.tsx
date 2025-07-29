import MacbookFrame from "./MacbookFrame";
import MacosDesktop from "./react-macos-desktop/lib";

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-700 dark:text-slate-300 text-center mb-2">
        Projects
      </h2>

      <div className="w-[90vw] mx-auto flex items-center justify-center bg-white dark:bg-[#0B0B0F] rounded-xl p-4">
        <MacbookFrame>
          <MacosDesktop />
        </MacbookFrame>
      </div>
    </div>
  );
}
