import { connectDB } from "@/utill/database"
import { MongoClient } from "mongodb"
import Main from "./components/Main/page"

export default async function Home() {

  const client = await connectDB
  const db = client.db("book")
  let result = await db.collection('persons').find().toArray()
  // console.log(result)

  return (
    <div>
    </div>
  )
}
