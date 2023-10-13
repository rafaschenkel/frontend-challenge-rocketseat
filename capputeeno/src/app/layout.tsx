import './globals.css';
import type { Metadata } from 'next';
import { Saira } from 'next/font/google';

const saira = Saira({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Loja para os apaixonados por café'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
