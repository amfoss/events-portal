import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hacktoberfest 2025 Portal",
  description: "Join us for Hacktoberfest!",
  icons: {
    icon: [
      {
        url: "/amfoss_bulb_white.svg",
        type: "image/svg+xml",
      },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/logo192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}