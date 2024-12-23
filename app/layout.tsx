import "./css/style.css";

import { Fredoka, Nunito } from "next/font/google";
import { AuthProvider } from './providers/AuthProvider';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <UserProvider>
          <AuthProvider>
            <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              {children}
            </div>
          </AuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}
