import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import StoreProvider from '@/redux/provider';
import { LayoutType } from '@/interfaces/common';
import { Header } from '@/components/common/Header/Header';

import './globals.css';

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
