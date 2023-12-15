import './globals.css'
import Header from './components/Header/page'

export const metadata = {
  title: '작은 도서관',
  description: '도서 관리 프로그램',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
