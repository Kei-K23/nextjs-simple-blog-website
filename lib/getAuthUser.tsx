import { prisma } from "@/db";

async function getAuthUser(name: string, password: string) {
  return await prisma.writers.findFirst({
    where: {
      name,
      password,
    },
  });
}

export default getAuthUser;
