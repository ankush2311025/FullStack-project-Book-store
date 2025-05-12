import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.routers.js'
import cors from 'cors'


const app = express()
app.use(cors());
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 3000
const MongoDB = process.env.MONGODB_URI


//connect to database
mongoose.connect(MongoDB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    
//defining route
app.use('/books', bookRoute)
app.use('/user', userRoute)

app.listen(port, () => {
  console.log(`Server is  listening on port ${port}`)
})
