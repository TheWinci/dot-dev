"use server"
import { serialize as mdxSerialize } from "next-mdx-remote/serialize";

export async function serialize (source: string) {
  return await mdxSerialize(source);
}