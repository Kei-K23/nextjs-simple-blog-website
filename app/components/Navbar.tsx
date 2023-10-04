import Image from "next/image";
import Link from "next/link";
import { WriteIcon } from "./motion/WriteIcon";
const Navbar = () => {
  return (
    <header className="page-padding shadow-xl shadow-slate-900  ">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="font-bold hover:text-sky-600">
          Writer
        </Link>
        <Link href={"/add_blog"}>
          <WriteIcon />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
