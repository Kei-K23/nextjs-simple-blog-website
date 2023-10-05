import Link from "next/link";
import { WriteIcon } from "./motion/WriteIcon";
import { UserIcon } from "./motion/UserIcon";
import { cookies } from "next/headers";
const Navbar = () => {
  const cookieStore = cookies();
  const user = cookieStore.get("user");

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
