import type { Metadata } from "next";
import { Anek_Gujarati } from "next/font/google";
import "./globals.css";

const inter = Anek_Gujarati({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi! I'm Chris",
  description: "A website created by Chris Teng",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflow: "visible" }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
