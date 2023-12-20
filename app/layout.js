import './globals.css'
import Header from './components/Header/page'
import Link from 'next/link'

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
        <div className='navbar'>
          <div className='navbar_conatainer'>
          <Link href="/components/Main">도서관리</Link>
          <Link href="/management">도서목록</Link>
          <Link href="/management">도서대여</Link>
          <Link href="/management">도서반품</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
