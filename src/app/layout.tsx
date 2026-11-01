import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PURPOSELY Global | Building People of Impact",
    template: "%s | PURPOSELY Global",
  },
  description:
    "PURPOSELY is a growth-focused community building people of impact for a better society through intentional growth, practical learning, discipline, and accountability.",
  applicationName: "PURPOSELY Global",
  keywords: [
    "PURPOSELY",
    "PURPOSELY Global",
    "Personal Development",
    "Purpose Discovery",
    "Leadership Development",
    "Intentional Growth",
    "Personal Growth Community",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
