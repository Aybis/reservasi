import Head from 'next/head';
import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  metaDescription?: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle, metaDescription } = props;

  return (
    <div className="relative max-h-full w-full bg-zinc-50 h-screen ">
      <Head>
        <title>MBR | {pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Header />
      <Sidebar />
      {/* Content */}
      <main className="relative pt-4 px-4 w-full pl-48">{children}</main>
    </div>
  );
}
