import { MacbookScroll } from "../ui/macbook-scroll";

export default function ProjectsMacbookComponent() {
  return (
    <MacbookScroll
      title={
        <span>
          This Macbook is built with Tailwindcss. <br /> No kidding.
        </span>
      }
      // badge={
      //   <a href="https://peerlist.io/manuarora">
      //     <Badge className="h-10 w-10 -rotate-12 transform" />
      //   </a>
      // }
      src={`/linear.webp`}
      showGradient={false}
    />
  );
}
