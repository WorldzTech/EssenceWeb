import "./globals.css";
import localFont from 'next/font/local';

const productSans = localFont({
  src: [
    {
      path: './fonts/ProductSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-Medium.woff',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-product-sans',
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
        className={`${productSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
