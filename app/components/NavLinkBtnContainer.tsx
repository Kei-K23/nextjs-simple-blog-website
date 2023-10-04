"use client";

import Link from "next/link";
import { motion } from "framer-motion";
const NavLinkBtnContainer = () => {
  return (
    <div>
      <motion.button whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
        <Link
          className="bg-sky-600 border-2 rounded-md border-sky-600 p-2 font-bold text-lg shadow-lg shadow-slate-800 "
          href={"/blogs"}
        >
          See All Blogs
        </Link>
      </motion.button>
    </div>
  );
};

export default NavLinkBtnContainer;
