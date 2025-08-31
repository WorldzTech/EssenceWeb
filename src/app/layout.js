import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Essence",
  description: "Next gen token",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet' />
        <link href='https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css' rel='stylesheet' />
        <script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js" async></script>
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
