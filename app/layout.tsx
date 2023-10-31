import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './theme-config.css';

import NavBar from './components/NavBar';

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Сообщение о проблеме',
  description: 'Сообщите о проблеме, которая возникла у Вас во время работы с нашим сервисом',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <Theme accentColor="violet" scaling="110%">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
