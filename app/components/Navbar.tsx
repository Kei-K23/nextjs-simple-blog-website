import Link from "next/link";

const Navbar = () => {
  return (
    <header className="page-padding shadow-xl shadow-slate-900">
      <nav>
        <Link href={"/"} className="font-bold hover:text-sky-600">
          Writer
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
