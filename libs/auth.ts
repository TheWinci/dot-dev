import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date(Date.now() + 1000 * 60 * 10)) // 60 sec * 10
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function login(formData: FormData): Promise<boolean> {
  const user = {
    name: formData.get("name"),
  };

  // Verify credentials && get the user
  if (!user.name) {
    return false;
  }

  const expires = new Date(Date.now() + 1000 * 60 * 10); // + 60 sec * 10
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });

  return true;
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  if (parsed === null) return;

  // Refresh the session so it doesn't expire
  const res = NextResponse.next();
  const expires = new Date(Date.now() + 1000 * 60 * 10); // + 60 sec * 10
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: expires,
  });
  
  return res;
}
