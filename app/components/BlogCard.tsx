"use client";

import { useState } from "react";
import EllipsisIcon from "./motion/EllipsisIcon";
import BackDrop from "./BackDrop";
import CloseBtn from "./motion/CloseBtn";

type Props = {
  blog: {
    id: string;
    title: string;
    authorName: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

const BlogCard = ({ blog }: Props) => {
  const [isShowSetting, setIsShowSetting] = useState("");
  const handleShowSetting = (id: string) => {
    setIsShowSetting((prev) => (prev = id));
  };

  const handleHideShowSetting = () => {
    setIsShowSetting("");
  };
  return (
    <div
      key={blog.id}
      className="relative bg-slate-900 p-4 rounded-lg shadow-lg shadow-slate-800"
    >
      {blog.id === isShowSetting && <BackDrop />}
      <h2 className=" text-sky-600 break-words text-2xl font-bold">
        {blog.title}
      </h2>
      {isShowSetting ? (
        <CloseBtn onClick={() => handleHideShowSetting()} />
      ) : (
        <EllipsisIcon onClick={() => handleShowSetting(blog.id)} />
      )}
      <h3 className="text-lg font-bold text-slate-300">
        writer: {blog.authorName}
      </h3>
      <h3 className="text-base font-bold text-slate-300">
        wrote at:{" "}
        {blog.createdAt.toLocaleDateString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>
      {blog.createdAt === blog.updatedAt && (
        <h3 className="text-base font-bold text-slate-300">
          edited at:
          {blog.createdAt.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h3>
      )}
      <p className="break-words text-lg text-slate-100 mt-4 bg-slate-800 px-4 py-2 rounded-xl">
        {blog.body}
      </p>
    </div>
  );
};

export default BlogCard;
