import StyledComponentsRegistry from '@/lib/registry';
import StoreProvider from '@/redux/provider';
import { LayoutType } from '@/interfaces/common';

import './globals.css';

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
