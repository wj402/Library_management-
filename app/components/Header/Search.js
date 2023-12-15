'use client'

export default function Search() {
  return (
    <div className="Search">
      <form action="/" method="get" >
        <input name="title" placeholder="찾고싶은 내용을 검색하세요." maxLength='13' ></input>
        <button type="submit">검색</button>
      </form>
    </div>
  )
}