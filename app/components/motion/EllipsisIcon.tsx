"use client";

import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
};

const EllipsisIcon = ({ onClick }: Props) => {
  return (
    <div
      className="cursor-pointer absolute top-3 right-3"
      onClick={onClick}
      title="edit"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 512"
        width={20}
        height={23}
        aria-label="edit"
        fill="white"
        whileHover={{ fill: "skyblue", scale: 0.9 }}
      >
        <motion.path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
      </motion.svg>
    </div>
  );
};

export default EllipsisIcon;
