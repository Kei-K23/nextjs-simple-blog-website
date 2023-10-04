"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { useState, useRef } from "react";

type Props = {
  actionType: (formData: FormData) => Promise<void>;
  isEditBlog?: boolean;
  prevValue?: {
    id?: string;
    title?: string;
    author?: string;
    body?: string;
  };
  buttonText: string;
};

const Form = ({ actionType, isEditBlog, buttonText, prevValue }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [blogData, setBlogData] = useState({
    title: prevValue?.title || "",
    author: prevValue?.author || "",
    body: prevValue?.body || "",
  });

  const handleClear = () => {
    if (isEditBlog) {
      window.location.reload();
    }
    return;
  };

  return (
    <>
      <form
        action={actionType}
        className="mx-auto width flex flex-col justify-start gap-4 shadow-xl shadow-slate-900 ring-2 ring-slate-500 "
        ref={formRef}
      >
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Write title"
            className="text-input"
            value={blogData.title}
            onChange={(e) => {
              setBlogData((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              });
            }}
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="authorName">Author:</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            placeholder="Write author name"
            className="text-input"
            value={blogData.author}
            onChange={(e) => {
              setBlogData((prev) => {
                return {
                  ...prev,
                  author: e.target.value,
                };
              });
            }}
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            placeholder="Write your title"
            className="text-input h-36"
            value={blogData.body}
            onChange={(e) => {
              setBlogData((prev) => {
                return {
                  ...prev,
                  body: e.target.value,
                };
              });
            }}
            required
          ></textarea>
        </div>
        {prevValue?.id && (
          <input type="text" name="id" hidden value={prevValue.id} />
        )}
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 rounded-md border-slate-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-slate-500 active:bg-slate-600"
            type="submit"
            title="add blog"
            onClick={handleClear}
          >
            {buttonText}
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            className=" border-2 rounded-md border-red-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-red-700 active:bg-red-800  bg-red-600"
            type="button"
            title="clear form"
          >
            {" "}
            Clear
          </motion.button>
        </div>
      </form>
    </>
  );
};

export default Form;
