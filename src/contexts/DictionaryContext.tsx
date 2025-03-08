"use client"
import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { Locale } from '../../i18n-config';
import { getDictionary } from '@/actions/dictionaries';

interface DictionaryContextProps {
  dictionary: Record<string, unknown> | null;
}

const DictionaryContext = createContext<DictionaryContextProps | undefined>(undefined);

export const DictionaryProvider: React.FC<PropsWithChildren<{ lang: Locale }>> = ({ lang, children }) => {
  const [dictionary, setDictionary] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    };
    fetchDictionary();
  }, [lang]);

  return (
    <DictionaryContext.Provider value={{ dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
};