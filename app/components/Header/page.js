import Image from "next/image"
import Logo from "../../../public/logo2.png"
import Link from "next/link"
import Search from "./Search"
import Nav from "./Nav"
import Login from "./Login"

export default function header() {
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">
          <Link href="/">
            <Image src = {Logo} alt="로고이미지" className="logo_img" />
          </Link>
        </div>
        <Search />
        <Nav />
        <Login />
      </div>
    </div>
  )
}