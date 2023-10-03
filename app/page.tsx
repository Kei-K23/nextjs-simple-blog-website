import { prisma } from "@/db";
import PostListContainer from "./components/PostListContainer";

async function getBlogs() {
  return await prisma.blog.create({
    data: {
      title: "This is title",
      body: "This is body",
      authorName: "Arkarmin",
    },
  });
}

export default async function Home() {
  const blogs = await prisma.blog.findMany();
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

      <PostListContainer />
    </main>
  );
}
