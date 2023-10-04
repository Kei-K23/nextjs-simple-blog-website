import type { Metadata } from "next";
import Form from "../components/Form";
import { addNewBlog } from "../actions";

export const metadata: Metadata = {
  title: "Add blog",
  description: "write your new blog",
};

const AddBlog = () => {
  return (
    <div className="page-padding">
      <Form actionType={addNewBlog} buttonText="Write blog" />
    </div>
  );
};

export default AddBlog;
