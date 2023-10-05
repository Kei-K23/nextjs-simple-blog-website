import getAuthUser from "@/lib/getAuthUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const authUser = await isAuthenticated(request);
  console.log(authUser);
  if (authUser) {
    return NextResponse.json({
      authUser,
    });
  } else {
    return new NextResponse("unauthorize", {
      status: 401,
      statusText: "unauthorize",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}

export async function isAuthenticated(request: NextRequest) {
  const authHeader =
    request.headers.get("Authorization") ||
    request.headers.get("authorization");
  if (!authHeader) {
    return new NextResponse("unauthorize", {
      status: 401,
      statusText: "unauthorize",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  const auth = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];
  const authUser = await getAuthUser(user, pass);
  return authUser;
}
