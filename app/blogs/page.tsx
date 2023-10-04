import getBlogs from "@/lib/getBlogs";
import BlogListContainer from "../components/BlogListContainer";

const page = async () => {
  const blogs = await getBlogs({ retrieve: { retrieveKeyWord: "all" } });
  return (
    <div>
      <BlogListContainer blogLists={blogs} />
    </div>
  );
};

export default page;
