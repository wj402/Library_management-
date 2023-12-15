import { connectDB } from "@/utill/database"
import { MongoClient } from "mongodb"

export default async function Home() {

  const client = await connectDB
  const db = client.db("book")
  let result = await db.collection('persons').find().toArray()
  // console.log(result)

  return (
    <div>
      <h1>메인페이지</h1>
    </div>
  )
}
