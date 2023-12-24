'use client'
import Header from "@/components/shared/Header/Header";
import "../styles/globalStyles.css"
import StyledComponentsRegistry from "./registry"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
