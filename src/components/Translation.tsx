"use client";

import React from "react";
import { useDictionary } from "@/contexts/DictionaryContext";

interface TranslationProps {
  translationKey: string;
}

const Translation: React.FC<TranslationProps> = ({ translationKey }) => {
  const { dictionary } = useDictionary();

  if (!dictionary) {
    return <span>{translationKey}</span>;
  }

  const translation = translationKey.split(".").reduce((acc, key) => {
    console.log('translationKey', translationKey)
    console.log('acc', acc)
    console.log('key', key)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (acc as any)[key];
  }, dictionary);

  console.log("returning translation", translation);
  return (
    <span className="bg-white text-4xl text-black">{String(translation)}</span>
  );
};

export default Translation;
