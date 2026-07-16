import "./globals.css";

import { manrope } from "./lib/fonts";
import Header from "./components/header";
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
        <Header/>
        <main>
        {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
