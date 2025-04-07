import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-4 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-lg md:text-2xl font-medium">
            Eden Journo Fellous
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
