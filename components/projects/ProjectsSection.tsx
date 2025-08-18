import MacbookFrame from "./MacbookFrame";
import MacosDesktop from "./react-macos-desktop/lib";
import { forwardRef } from "react";

const ProjectsSection = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-700 dark:text-slate-300 text-center mb-2">
        Projects
      </h2>
      <div className="relative z-[99] h-[90vh] mr-12 ml-12">
        <MacbookFrame>
          <MacosDesktop />
        </MacbookFrame>
      </div>
      {/* Your screen content goes here */}
    </div>
  );
});
export default ProjectsSection;
