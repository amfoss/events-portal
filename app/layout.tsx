import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hacktoberfest Event Portal",
  description: "Join us for Hacktoberfest!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
