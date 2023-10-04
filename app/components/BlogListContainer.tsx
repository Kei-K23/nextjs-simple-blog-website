import BlogCard from "./BlogCard";

type Props = {
  blogLists: Blogs[] | Blogs | null;
};

const BlogListContainer = ({ blogLists }: Props) => {
  return (
    <div className="width mx-auto grid grid-cols-1 gap-8 ">
      {Array.isArray(blogLists)
        ? blogLists.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        : blogLists && <BlogCard blog={blogLists} />}
    </div>
  );
};

export default BlogListContainer;
