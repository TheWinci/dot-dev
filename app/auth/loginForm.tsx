import { login } from "@/libs/auth";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

async function LoginForm({ children }: PropsWithChildren) {
  return (
    <form
      className="z-10 flex flex-col items-center"
      autoComplete="off"
      action={async (formData: FormData) => {
        "use server";
        await login(formData);

        redirect("/dashboard");
      }}
    >
      {children}
    </form>
  );
}

export default LoginForm;
