import { MongoClient } from "mongodb";
const url = 'mongodb+srv://wj402:0000@chanseong.fxzvuot.mongodb.net/?retryWrites=true&w=majority'
let connectDB
if (process.env.NODE_ENV === 'development') {
  if(!global.mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}

export { connectDB }