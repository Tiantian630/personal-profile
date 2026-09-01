import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '马甜甜｜新媒体 / 内容运营',
  description: '马甜甜的新媒体与内容运营个人作品集。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
