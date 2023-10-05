"use server";

import { prisma } from "@/db";

import { redirect } from "next/navigation";
import { checkCookie, setCookie } from "@/lib/cookie";

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

export async function signUp(formData: FormData) {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;
  const genre = formData.get("genre") as string;

  await prisma.writers.create({
    data: {
      name,
      password,
      genre,
    },
  });

  redirect("/");
}

export async function signIn(formData: FormData) {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;
  const base64Encode = btoa(`${name}:${password}`);

  try {
    const res = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        Authorization: `Basic ${base64Encode}`,
      },
    });

    const data = await res.json();

    if (data.status === 401) {
    } else {
      if (!checkCookie(data.authUser.name)) {
        setCookie("user", data.authUser.name, 7);
      } else {
      }
    }
  } catch (error) {
    console.log(error);
  }
  redirect("/");
}
