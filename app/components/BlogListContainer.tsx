"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";

type Props = {
  blogLists: Blogs[] | Blogs | null;
};

const BlogListContainer = ({ blogLists }: Props) => {
  const [isShowSetting, setIsShowSetting] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="width mx-auto grid grid-cols-1 gap-8 ">
      {Array.isArray(blogLists)
        ? blogLists.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isShowSetting={isShowSetting}
              isEdit={isEdit}
              setIsShowSetting={setIsShowSetting}
              setIsEdit={setIsEdit}
            />
          ))
        : blogLists && (
            <BlogCard
              isShowSetting={isShowSetting}
              isEdit={isEdit}
              setIsShowSetting={setIsShowSetting}
              setIsEdit={setIsEdit}
              blog={blogLists}
            />
          )}
    </div>
  );
};

export default BlogListContainer;
