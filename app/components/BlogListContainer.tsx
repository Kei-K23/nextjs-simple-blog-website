type Props = {
  blogLists: Blogs[] | Blogs | null;
};

const BlogListContainer = ({ blogLists }: Props) => {
  return (
    <div>
      {Array.isArray(blogLists) ? (
        blogLists.map((blog) => <div key={blog.id}>{blog.id}</div>)
      ) : (
        <div>{blogLists?.id}</div>
      )}
    </div>
  );
};

export default BlogListContainer;
