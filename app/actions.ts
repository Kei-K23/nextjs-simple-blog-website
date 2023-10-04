"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function addNewBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const authorName = formData.get("authorName") as string;
  const body = formData.get("body") as string;

  await prisma.blog.create({
    data: {
      title,
      authorName,
      body,
    },
  });
  redirect("/");
}

export async function deleteBlog(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.blog.delete({ where: { id } });
  redirect("/");
}

export async function editBlog(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const authorName = formData.get("authorName") as string;
  const body = formData.get("body") as string;
  await prisma.blog.update({
    where: { id },
    data: {
      title,
      authorName,
      body,
    },
  });
  redirect("/");
}
