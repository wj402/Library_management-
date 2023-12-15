import Link from "next/link";

export default function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link href="/">공지</Link>
        </li>
        <li>
          <Link href="/">도서관리</Link>
        </li>
        <li>
          <Link href="/">요청게시판</Link>
        </li>
        <li>
          <Link href="/">커뮤니티</Link>
        </li>
      </ul>
    </div>
  )
}