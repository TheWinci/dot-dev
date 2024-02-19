import { login } from "@/libs/auth";
import React, { PropsWithChildren } from "react";

async function LoginForm({ children }: PropsWithChildren) {
  return (
    <form
      className="z-10 flex flex-col"
      action={async (formData: FormData) => {
        "use server";
        await login(formData);
      }}
    >
      {children}
    </form>
  );
}

export default LoginForm;
