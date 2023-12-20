import { connectDB } from "@/utill/database"
import { ObjectId } from "mongodb"
import Image from "next/image"
import bookimage from "../../../../../public/book.jpg"
import RentalBtn from "./RentalBtn"

export default async function Name( props ) {

  const client = await connectDB
  const db = client.db("book")
  let result = await db.collection('persons').findOne( { _id : new ObjectId(props.params.id)} )
  // console.log(props)


  // let insert = await db.collection('persons').updateMany({}, {
  //   $push: {대여 : false}
  // })

  let result2 = await db.collection('persons').find().toArray()
  // console.log(result)
  

  return (
    <div className="bookpage">
      <div className="bookpage_container">
        <ul>
          <li className="bookname">
            <h1>{result.서명}</h1>
            <h4>인생의 홀로서기를 시작하는 청춘을 위한 김난도 교수의 따뜻한 멘토링!</h4>
          </li>
          <li className="bookimg">
            <Image src={bookimage} alt="책이미지"></Image>
          </li>
          <li className="story">
            <h3>줄거리</h3>
            <p><strong>인생의 홀로서기를 시작하는 청춘을 위한 김난도 교수의 따뜻한 멘토링!</strong></p>
            <div className="sub_story">
              <span>
              불안한 미래와 외로운 청춘을 보내고 있는 이 시대 젊은이들에게 보내는 편지 『아프니까 청춘이다』. <br />
              수많은 청춘들의 마음을 울린 김난도 교수가 여러 매체에 기고했던 글을 비롯해 총 42편의 격려 메시지를 하나로 묶어 소개한다. 네이버와 싸이월드를 통해 청춘들의 공감을 얻어내는 멘토링을 던져왔던 김난도 교수는 서울대학교 학생들이 뽑은 최고의 멘토이기도 하다.
              그는 미래에 대한 불안감으로 힘들어하는 이들에게 따뜻한 위로의 글을 전한다. 또 때로는 차가운 지성의 언어로 청춘들이 미처 생각하지 못한 깨달음을 일깨워주어 아무리 독한 슬픔과 슬럼프를 만나더라도 스스로 극복하고 이겨낼 수 있는 용기를 전한다.
              스무살이 되는 아들과 중학생인 아들을 두고 있으며, 교수님보다는 선생님이라는 호칭을 더 좋아하는 대학교수 김난도. 그는 매일 젊은 청춘들을 만나는 직업 덕분에 그들의 고민을 듣고 함께 느끼게 된다. 이 책은 젊은 청춘들이 눈앞에 이익이 아닌 멀리 보는 지혜를 가질 수 있도록 총 4부를 통해 현실적이고 핵심적인 조언을 전한다. 자신의 인생을 똑바로 바라보고, 시련을 두려워하지 않으며 기적을 이루는 삶. 김난도 교수는 막연한 희망 메시지 대신 청춘들이 가까이 느낄 수 있는 현실적인 조언을 던진다.
              </span>
            </div>
          </li>
          <li className="notice">
            <h3>정보</h3>
            <ul>
              <li>저자 : {result.저자}</li>
              <li>발행자 : {result.발행자}</li>
              <li>책수 : {result.책수}</li>
              <li>단가 : {result.단가}</li>
              <li>금액 : {result.금액}</li>
            </ul>
          </li>
          <li>
            <RentalBtn result={ result2._id } />
          </li>
        </ul>
      </div>
    </div>
  )
}