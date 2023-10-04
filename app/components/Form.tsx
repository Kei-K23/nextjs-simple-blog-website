"use client";

import { motion } from "framer-motion";
import { addNewBlog } from "../actions";
import { useRef } from "react";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleClear = () => {
    formRef.current?.reset();
  };

  return (
    <>
      <form
        action={addNewBlog}
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
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 rounded-md border-slate-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-slate-500 active:bg-slate-600"
            type="submit"
            title="add blog"
          >
            Write blog
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            className=" border-2 rounded-md border-red-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-red-700 active:bg-red-800  bg-red-600"
            onClick={handleClear}
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
