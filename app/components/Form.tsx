"use client";

import { addNewBlog } from "../actions";

const Form = () => {
  return (
    <>
      <form
        action={addNewBlog}
        className="mx-auto width flex flex-col justify-start gap-4 shadow-xl shadow-slate-900 ring-2 ring-slate-500"
      >
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="title">Title:</label>

          <input
            type="text"
            id="title"
            name="title"
            placeholder="Write title"
            className="text-black"
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
            className="text-black"
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            placeholder="Write your title"
            className="text-black h-36"
            required
          ></textarea>
        </div>
        <button
          className="border border-slate-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-slate-500 active:bg-slate-600 active:scale-95"
          type="submit"
        >
          Write blog
        </button>
      </form>
    </>
  );
};

export default Form;
