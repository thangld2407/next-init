import { ConfigProvider as AntdConfigProvider } from 'antd';
import { Metadata } from 'next';
import { antdServerConfig } from '~/configs/antd.server';
import { AntdStyleRegistry, antdClientConfig } from '~/configs/antd.client';
import { QueryProviders } from '~/configs/react-query';
import StyledComponentsRegistry from '~/configs/styled-component';
import '../assets/styles/index.scss';

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body suppressHydrationWarning={true}>
        <QueryProviders>
          <AntdConfigProvider {...antdServerConfig} {...antdClientConfig}>
            <AntdStyleRegistry>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </AntdStyleRegistry>
          </AntdConfigProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
