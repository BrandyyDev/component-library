import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Prueba de Next.js",
  description: "Una prueba de Next.js con un componente de tarjeta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
