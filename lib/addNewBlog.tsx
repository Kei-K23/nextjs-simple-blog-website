import { prisma } from "@/db";

const addNewBlog = async (title: string, authorName: string, body: string) => {
  await prisma.blog.create({
    data: {
      title,
      authorName,
      body,
    },
  });
};

export default addNewBlog;
