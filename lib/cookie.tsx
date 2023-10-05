import { cookies } from "next/headers";

function setCookie(cName: string, cValue: string, expDay: number): void {
  const expiredDay = expDay * 24 * 60 * 60;

  cookies().set(cName, cValue, {
    expires: Date.now() + expiredDay * 1000,
    path: "/",
  });
}

function checkCookie(name: string) {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has(name);
  if (hasCookie) {
    return cookiesList.get(name);
  } else {
    return false;
  }
}

export { setCookie, checkCookie };
