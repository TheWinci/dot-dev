"use client";
import React, { Fragment, FocusEvent, useState } from "react";
import { useFormStatus } from "react-dom";

const initialName = "WINCI.DEV";
const initialPassword = "************";

export function LoginFormFields() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { pending } = useFormStatus();

  return (
    <Fragment>
      {/* <!-- fake fields are a workaround for chrome autofill getting the wrong fields --> */}
      <input className="hidden" type="text" name="fakeusernameremembered" />
      <input className="hidden" type="password" name="fakepasswordremembered" />
      <input
        tabIndex={0}
        name="name"
        placeholder="NAME"
        defaultValue={initialName}
        autoComplete="one-time-code"
        onBlur={(event: FocusEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
        className="z-10 bg-gradient-to-b from-neutral-200 to-neutral-600  bg-clip-text text-center font-sans text-lg font-bold  text-transparent placeholder-neutral-600 caret-neutral-600 outline-none md:text-6xl"
      />
      <input
        tabIndex={1}
        name="password"
        type="password"
        placeholder="PASSWORD"
        defaultValue={initialPassword}
        autoComplete="one-time-code"
        onBlur={(event: FocusEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
        className={`${name.length >= 3 ? "scale-y-100" : "max-h-0 scale-y-0"} z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent placeholder-neutral-600 caret-neutral-600 outline-none transition-all duration-300 ease-linear md:text-6xl`}
      />
      <input
        tabIndex={2}
        type="submit"
        aria-disabled={pending}
        disabled={pending}
        className={`${password.length >= 3 && name.length >= 3 ? "scale-y-100" : "max-h-0 scale-y-0"} z-10 cursor-pointer rounded-full border border-neutral-600 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text px-10 py-2 text-center font-sans text-lg font-bold uppercase text-transparent placeholder-neutral-600 caret-neutral-600 outline-none transition-all duration-300 ease-linear hover:scale-110 hover:border-transparent md:text-3xl`}
      />
    </Fragment>
  );
}
