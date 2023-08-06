import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/bootstrap";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanilla Javascript is for Lunatics!",
  description: "Lu pake JS, Lu punya kuasa, ga gitu nyet! ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          <Container className="py-4">{children}</Container>
        </main>
      </body>
    </html>
  );
}
