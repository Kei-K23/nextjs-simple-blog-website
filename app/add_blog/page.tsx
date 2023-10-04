import type { Metadata } from "next";
import Form from "../components/Form";

export const metadata: Metadata = {
  title: "Add blog",
  description: "write your new blog",
};

const AddBlog = () => {
  return (
    <div className="page-padding">
      <Form />
    </div>
  );
};

export default AddBlog;
