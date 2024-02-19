"use client";
import Show from "@/utils/show";
import React, { Fragment, FocusEvent, useState } from "react";

const initialName = "WINCI.DEV";
const initialPassword = "************";

type InputProps = {
  onChange: (value: string) => void;
};

export function LoginFormFields() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Fragment>
      <div className="max-h-0 scale-y-0 bg-slate-500">TEST</div>
      <input
        tabIndex={0}
        name="name"
        placeholder="NAME"
        defaultValue={initialName}
        onBlur={(event: FocusEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
        className="z-10 inline-block max-w-64 bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-clip-text text-center text-4xl font-bold text-transparent caret-blue-600 outline-none hover:[animation-play-state:paused] motion-safe:animate-bounce md:max-w-xs"
      />
      <input
        tabIndex={1}
        name="password"
        type="password"
        placeholder="PASSWORD"
        defaultValue={initialPassword}
        onBlur={(event: FocusEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
        className={`${name.length >= 3 ? "scale-y-100" : "max-h-0 scale-y-0"} z-10 inline-block max-w-56 origin-top transform bg-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-clip-text text-center text-4xl text-transparent placeholder-indigo-800 caret-blue-600 outline-none transition-all duration-500 ease-linear md:max-w-xs`}
      />
      <input
        tabIndex={2}
        type="submit"
        className={`${password.length >= 3 && name.length >= 3 ? "scale-y-100" : "max-h-0 scale-y-0"} z-10 inline-block max-w-56 origin-top transform outline-none transition-all duration-500 ease-linear md:max-w-xs`}
      />
    </Fragment>
  );
}
