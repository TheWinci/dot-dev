"use client";
import { delay } from "@/utils/delay";
import Show from "@/utils/show";
import { useQuery } from "@tanstack/react-query";
import React, { FocusEventHandler, useEffect, useState } from "react";

const initialName = "WINCI.DEV";
const initialPassword = "";

function Content() {
  const [name, setName] = useState<string>(initialName);
  const [password, setPassword] = useState<string>("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const { data, isFetching, isError, isRefetching, refetch } = useQuery({
    queryKey: ["user"],
    refetchOnMount: false,
    enabled: false,
    queryFn: async () => {
      if (name === "ERROR") {
        throw new Error("TEST ERROR");
      }

      if (
        name === initialName ||
        password === initialPassword ||
        password.length < 3
      ) {
        return false;
      }

      await delay(2000);

      return true;
    },
  });

  const handleNameOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  const handlePasswordOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (name !== initialName && name.length > 3) {
      setIsInputVisible(true);
      return;
    }

    setIsInputVisible(false);
  }, [name]);

  useEffect(() => {
    if (password.length > 3 && isInputVisible) {
      refetch();
    }
  }, [name, password, isInputVisible, refetch]);

  return (
    <div className="flex min-h-full min-w-full flex-col items-center justify-center overflow-hidden bg-gray-950">
      <div
        className={`absolute z-0 rounded-full bg-gradient-eclips2 from-blue-600 to-indigo-900 blur-xl filter hover:[animation-play-state:paused] motion-safe:animate-spin-slow p-36 md:p-56`}
      />
      <div className="absolute z-10 rounded-full bg-gray-950 p-32 md:p-52" />
      <Show if={!isFetching && !isRefetching}>
        <input
          tabIndex={0}
          className="z-10 inline-block max-w-56 bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-clip-text text-center text-4xl font-bold text-transparent hover:[animation-play-state:paused] motion-safe:animate-bounce"
          onBlur={handleNameOnBlur}
          defaultValue={name}
        />
        <input
          tabIndex={1}
          type="password"
          defaultValue="************"
          onBlur={handlePasswordOnBlur}
          className={`${isInputVisible ? "scale-y-100" : "max-h-0 scale-y-0"} z-10 inline-block max-w-56 origin-top transform bg-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-clip-text text-center text-4xl text-transparent placeholder-indigo-800 transition-all duration-500 ease-linear`}
        />
      </Show>
      <Show if={isFetching || isRefetching}>
        <span className="loader z-10 max-w-72 md:max-w-md"></span>
      </Show>
      <Show if={isError}>
        <span className="z-10">ERROR</span>
      </Show>
    </div>
  );
}

export default Content;
