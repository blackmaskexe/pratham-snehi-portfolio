import MacbookFrame from "./MacbookFrame";
import MacosDesktop from "./react-macos-desktop/lib";
import { forwardRef } from "react";

const ProjectsSection = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div ref={ref} {...props}>
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
