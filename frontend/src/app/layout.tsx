"use client";
import Provider from "../context/Provider";
import Nav from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <>
            <Nav />
            {children}
          </>
        </Provider>
      </body>
    </html>
  );
}
