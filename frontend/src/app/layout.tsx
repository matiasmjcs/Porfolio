"use client";
import Provider from "../context/Provider";

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
          <>{children}</>
        </Provider>
      </body>
    </html>
  );
}
