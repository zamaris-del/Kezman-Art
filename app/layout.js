import "./globals.css";

export const metadata = {
  title: "Kezman Paints — Premium Painting, Interiors & Stamped Floors | Lagos",
  description: "Kezman Paints — Premium painting, luxury interiors, stamped floors and Kezman Emulsion Paint. Lagos, Abeokuta, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
