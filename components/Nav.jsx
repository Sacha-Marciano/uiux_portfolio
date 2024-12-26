"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Projects",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      <Link
        href="/"
        className={`${
          pathname === "/" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        About me
      </Link>
      <Link
        href={"./assets/resume/Sacha_Mordekhai_marciano_CV.pdf"}
        download
        target="_blank"
        className={` capitalize font-medium hover:text-accent transition-all`}
      >
        Resume
      </Link>
    </nav>
  );
};

export default Nav;
