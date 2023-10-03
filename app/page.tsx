import BlogListContainer from "./components/BlogListContainer";
import getBlogs from "@/lib/getBlogs";
import Form from "./components/Form";

export const revalidate = 60; // revalidate at most every hour

export default async function Home() {
  const blogs = await getBlogs({
    retrieve: {
      retrieveKeyWord: "latestBlogs",
    },
  });

  return (
    <main className="page-padding mt-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Share your experiences and feeling through{" "}
        <span className="text-sky-600">Writer</span>{" "}
      </h1>
      <h2 className="text-slate-200 text-2xl md:text-3xl font-extrabold mb-2">
        Discover a World of Knowledge and Inspiration
      </h2>
      <h2 className="text-slate-200 text-2xl md:text-3xl font-extrabold">
        Explore the Latest Trends and Insights all around the World with{" "}
        <span className="text-sky-600">Writer</span>
      </h2>

      <BlogListContainer blogLists={blogs} />
      <Form />
    </main>
  );
}
