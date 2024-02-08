import type { Metadata } from "next";
import { StructurePage } from "@/components/common/StructurePage";
import { NavBar } from "@/components/common/NavBar";
import { PageTitle } from "@/components/common/PageTitle";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { gwendolyn, poppins, pressStart2P } from "./fonts";

export const metadata: Metadata = {
  title: "My wedding",
  description:
    "Convide, conste sua história, mostre a felicidade de vocês até o grande dia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${pressStart2P.variable} ${gwendolyn.variable} ${poppins.variable}`}
      >
        <StructurePage>
          <PageTitle />
          <NavBar />
          {children}
          <ToastContainer />
        </StructurePage>
      </body>
    </html>
  );
}
