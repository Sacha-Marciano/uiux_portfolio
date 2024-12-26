"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col" aria-describedby={undefined}>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Eden <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
