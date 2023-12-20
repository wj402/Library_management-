'use client'
import Link from "next/link"


export default function ItemList( {result} ) {
  return (
    <div className="book_table">
      <table className="table1">
        <tr>
          <th className="td1">순서</th>
          <th className="td2">책이름</th>
          <th className="td3">저자</th>
          <th className="td6">발행년</th>
          <th className="td4">가격</th>
          <th className="td5">반품여부</th>
        </tr>
      </table>
      {
        result.map((a, i)=> {
          // console.log(a)
          return ( 
            <div key={i}> 
               <table  className="table1">
                <tr> 
                  <td className="td1">{a.번호}</td>
                  <td className="td2 box name">
                    <Link prefetch={false} href={ '/components/Main/Name/' + result[i]._id }>
                      {a.서명}
                    </Link>
                  </td>
                  <td className="td3 box">{a.저자}</td>
                  <td className="td6">{a.발행년}</td>
                  <td className="td4">{a.금액}</td>
                  <td className="td5"> 비고 </td>
                </tr>
               </table>
            </div>
          )
          
        })
      }
    </div>
  )
}