import React, { PropsWithChildren } from 'react';
import { Locale } from '../../../i18n-config';
import { DictionaryProvider } from '@/contexts/DictionaryContext';

export type TLayoutProps = PropsWithChildren<{
  params: Promise<{ lang: Locale }>;
}>;

const Layout = async (props: TLayoutProps) => {
  const { lang } = await props.params;

  return (
    <DictionaryProvider lang={lang}>
      {props.children}
    </DictionaryProvider>
  );
};

export default Layout;
