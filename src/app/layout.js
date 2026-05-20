import './globals.css'
import Providers from '../providers/Providers'
import LayoutWrapper from '../components/layout/LayoutWrapper'

export const metadata = {
  title: 'Anant Soft Computing',
  description: 'Custom software development, CRM, ERP, mobile apps, and digital solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}
