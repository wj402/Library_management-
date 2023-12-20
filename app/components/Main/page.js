import { connectDB } from "@/utill/database"
import ItemList from "./ItemList"
import Link from "next/link"

export default async function page( ) {

  const client = await connectDB
  const db = client.db("book")
  let result = await db.collection('persons').find().toArray()

  result = result.map((a) => {
    a._id = a._id.toString()
    return a
  })

  // console.log(result)

  return (
    <div>
      <ItemList result={result} />
    </div>
  )
}