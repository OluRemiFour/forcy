import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Forcythe - Your Partner in Sacalable Business Growth | Digital Solutions",
  description:
    "Forcythe - Your Partner in Sacalable Business Growth | Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${lexend.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
