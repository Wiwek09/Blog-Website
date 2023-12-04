import express from 'express'
import cookieParser from 'cookie-parser'
import postRoute from './routes/posts.js'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import multer from 'multer'

const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, )
    }
  })
 
const upload = multer({storage})

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.files;
    res.status(200).json(file.filename)
})

app.use('/api/post', postRoute)
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)

app.listen(8800, () => {
    console.log("Connected")
} )