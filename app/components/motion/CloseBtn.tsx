"use client";

import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
};

const CloseBtn = ({ onClick }: Props) => {
  return (
    <motion.div
      className="cursor-pointer absolute top-3 right-3"
      onClick={onClick}
      title="close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        width={20}
        height={23}
        aria-label="close"
        fill="white"
      >
        <motion.path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </motion.div>
  );
};

export default CloseBtn;
