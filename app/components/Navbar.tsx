import Image from "next/image";
import Link from "next/link";
import { WriteIcon } from "./WriteIcon";
const Navbar = () => {
  return (
    <header className="page-padding shadow-xl shadow-slate-900  ">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="font-bold hover:text-sky-600">
          Writer
        </Link>
        <WriteIcon />
      </nav>
    </header>
  );
};

export default Navbar;
