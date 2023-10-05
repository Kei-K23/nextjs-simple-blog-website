"use client";

import { motion } from "framer-motion";
import EllipsisIcon from "./motion/EllipsisIcon";
import BackDrop from "./BackDrop";
import CloseBtn from "./motion/CloseBtn";
import { deleteBlog, editBlog } from "../actions";
import Form from "./Form";

type Props = {
  blog: {
    id: string;
    title: string;
    authorName: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  };
  isShowSetting: string;
  setIsShowSetting: (value: React.SetStateAction<string>) => void;
  isEdit: boolean;
  setIsEdit: (value: React.SetStateAction<boolean>) => void;
};

const BlogCard = ({
  blog,
  isShowSetting,
  setIsShowSetting,
  isEdit,
  setIsEdit,
}: Props) => {
  const handleShowSetting = (id: string) => {
    setIsShowSetting(id);
  };

  const handleHideShowSetting = () => {
    setIsShowSetting("");
  };

  const handleEditStartShow = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      {isEdit && blog.id === isShowSetting ? (
        <Form
          setIsShowSetting={setIsShowSetting}
          setIsEdit={setIsEdit}
          isEditBlog={true}
          actionType={editBlog}
          buttonText="Edit"
          prevValue={{
            id: blog.id,
            title: blog.title,
            author: blog.authorName,
            body: blog.body,
          }}
        />
      ) : (
        <div
          key={blog.id}
          className="relative bg-slate-900 p-4 rounded-lg shadow-lg shadow-slate-800"
        >
          {blog.id === isShowSetting && (
            <BackDrop>
              <div className="flex justify-center items-center flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, translateY: 50 }}
                  animate={{ opacity: 1, scale: 1, bottom: 0, translateY: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative"
                >
                  <button
                    onClick={handleEditStartShow}
                    className="peer  w-full bg-sky-600 border-2 rounded-md border-sky-600 p-2 font-bold text-lg shadow-lg shadow-slate-800 "
                  >
                    Edit
                  </button>

                  <span className="left-tol peer-hover:block hidden">
                    Edit this blog?
                  </span>
                </motion.div>
                <motion.form
                  action={deleteBlog}
                  initial={{ opacity: 0, scale: 0.5, translateY: 50 }}
                  animate={{ opacity: 1, scale: 1, bottom: 0, translateY: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative"
                >
                  <input type="text" name="id" hidden value={blog.id} />
                  <button
                    type="submit"
                    className="peer w-full bg-red-600 border-2 rounded-md border-red-600 p-2 font-bold text-lg shadow-lg shadow-slate-800 "
                  >
                    Delete
                  </button>
                  <motion.span className="right-tol peer-hover:block hidden">
                    Delete this blog?
                  </motion.span>
                </motion.form>
              </div>
            </BackDrop>
          )}
          <h2 className=" text-sky-600 break-words text-2xl font-bold">
            {blog.title}
          </h2>
          {blog.id === isShowSetting ? (
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
          <p className="break-words text-lg text-slate-100 mt-4 bg-slate-800 px-4 py-2 rounded-xl">
            {blog.body}
          </p>
        </div>
      )}
    </>
  );
};

export default BlogCard;
