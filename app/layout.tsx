import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "SCUF - Svenska Celiakiungdomsförbundet",
  description: "Tillsammans gör vi vardagen med celiaki lite lättare. För barn och unga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${lato.variable} antialiased font-lato`}>
        {children}
      </body>
    </html>
  );
}
