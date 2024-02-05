
import "../styles/globalStyles.css";
import { rubik } from "../app/fonts/fonts";
import GlobalComponent from "./globalComponent";
import React from "react";
import { Providers } from "./lib/rtkProvider";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body className={`${rubik.className}`}>
          <Providers>
            <GlobalComponent>{children}</GlobalComponent>{" "}
          </Providers>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
