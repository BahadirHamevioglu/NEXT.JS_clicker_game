import { INTER } from "@/libs/fonts";

import "@/app/styles/reset.scss";
import "@/app/styles/global.scss";
import "@/app/styles/variables.scss";

import Footer from "@/components/footer";

export const metadata = {
  title: "NEXT.JS - Clicker Game",
  description: "Clicker Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={INTER.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
