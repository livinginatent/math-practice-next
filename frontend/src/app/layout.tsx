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
            <Header />
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
