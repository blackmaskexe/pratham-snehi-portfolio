import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/resizable-navbar";

const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function NavbarSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (link: string) => {
    // Extract section ID from the link (remove the # prefix)
    const sectionId = link.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={scrollToSection} />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="secondary"
            onClick={() => window.open('https://github.com/blackmaskexe', '_blank')}
          >
            GitHub
          </NavbarButton>
          <NavbarButton
            variant="primary"
            onClick={() => window.open('https://www.linkedin.com/in/prathamsnehi/', '_blank')}
          >
            LinkedIn
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
                setIsMobileMenuOpen(false);
              }}
              className="relative text-neutral-600 dark:text-neutral-300 bg-transparent border-none cursor-pointer text-left"
            >
              <span className="block">{item.name}</span>
            </button>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open('https://github.com/blackmaskexe', '_blank');
              }}
              variant="secondary"
              className="w-full"
            >
              GitHub
            </NavbarButton>
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open('https://www.linkedin.com/in/prathamsnehi/', '_blank');
              }}
              variant="primary"
              className="w-full"
            >
              LinkedIn
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
