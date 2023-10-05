import { prisma } from "@/db";

type Props = {
  retrieve: {
    id?: string;
    name?: string;
    retrieveKeyWord:
      | "all"
      | "findWithID"
      | "latestBlogs"
      | "findWithWriterName";
  };
};

const getBlogs = async ({ retrieve }: Props) => {
  switch (retrieve.retrieveKeyWord) {
    //find all
    case "all":
      return await prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
      });
    //find with id
    case "findWithID":
      return await prisma.blog.findUnique({
        where: { id: retrieve.id },
      });
    case "findWithWriterName":
      return await prisma.blog.findMany({
        where: { authorName: retrieve.name },
      });
    case "latestBlogs":
      return await prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        take: 6,
      });
    default:
      return await prisma.blog.findMany();
  }
};

export default getBlogs;
