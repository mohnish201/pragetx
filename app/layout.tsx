import type { Metadata } from "next";
import { Notable, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const notable = Notable({
  variable: "--font-notable",
  weight: ['400'],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pargetx Assigment",
  description: "Pargetx Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${notable?.variable} ${montserrat?.className} antialiased`}
      >
        <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
