
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';

import './globals.css';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'HOMIZ Media - Portfolio',
  description: 'Portfolio of HOMIZ Media - Portfolio Manager & Social Media Strategist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative pt-0">
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
