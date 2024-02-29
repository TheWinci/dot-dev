"use server"
import { logout } from "@/libs/auth";
import { redirect } from "next/navigation";
import React from "react";

function LogoutForm() {
  return (
    <form
      action={async () => {
        "use server";
        await logout();
        redirect("/");
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
}

export default LogoutForm;
