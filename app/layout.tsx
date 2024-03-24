import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import AuthProvider from "./components/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDFTLDR",
  description: "Simplify your PDFs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		<AuthProvider>
			<body className={inter.className}>
				<NavBar/>
				{children}
			</body>
		</AuthProvider>
    </html>
  );
}
