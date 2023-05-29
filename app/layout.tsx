import Navbar from "@/components/core/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/core/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Projet AS",
  description: "Redécouvrez l'apprentissage du BTP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full bg-slate-100 px-24`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
