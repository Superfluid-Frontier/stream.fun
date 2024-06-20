import './global.css';

import OnchainProviders from '@/OnchainProviders';
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { initAnalytics } from '@/utils/analytics';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  other: {
    boat: '0.17.0',
  },
};

// Stat analytics before the App renders,
// so we can track page views and early events
initAnalytics();

/** Root layout to define the structure of every page
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GAID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GAID}', {
                page_path: window.location.pathname,
              });
            `}
        </Script>
      </ThemeProvider>
      <OnchainProviders>
        {/* <body className={cn('bg-neutral-950 font-sans antialiased', fontSans.variable)}> */}
        <body className={cn('bg-black font-sans antialiased', fontSans.variable)}>
          {/* <Navbar /> */}
          {/* <header className="mt-20 text-white">
            <div className="container flex items-center justify-between border-b pb-6">
              <nav className="flex items-center justify-center">
                <div className="space-x-10">
                  <Link className="hover:text-zinc-700" href="/">
                    Home
                  </Link>
                  <Link className="hover:text-zinc-700" href="/about">
                    About
                  </Link>
                  <Link className="hover:text-zinc-700" href="/projects">
                    Projects
                  </Link>
                </div>
              </nav>
              <ConnectWalletButton />
            </div>
          </header> */}
          {children}
        </body>
      </OnchainProviders>
      <GoogleAnalytics />
    </html>
  );
}
