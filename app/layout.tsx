import "./globals.css";

import { manrope } from "./lib/fonts";
import Header from "./components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
