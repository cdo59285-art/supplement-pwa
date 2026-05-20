import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Supplement Reminder",
  description: "Offline Supplement PWA",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}