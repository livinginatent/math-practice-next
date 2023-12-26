"use client";
import Header from "@/components/shared/Header/Header";
import "../styles/globalStyles.css";
import StyledComponentsRegistry from "./registry";
import { rubik } from "../app/fonts/fonts";
import { Providers } from "./lib/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <Providers>
          <body className={`${rubik.className}`}>
            <Header />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </Providers>
      </html>
    </>
  );
}
