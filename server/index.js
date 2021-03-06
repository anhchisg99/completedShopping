require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
var mongoose = require("mongoose")
const routeItem = require('./routes/item.route')
const routeUser = require('./routes/user.route')
const routeOrder = require('./routes/order.route')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// const pass_mongodb = process.env.MONGODB_URL
// parse application/json
app.use(bodyParser.json())

// mongoose.connect(pass_mongodb || 'mongodb://localhost/vuejsshopping')
mongoose.connect(process.env.MONGODB_URL)
// mongoose.connect('mongodb://localhost/vuejsshopping')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//check
app.use('/api/item',routeItem)
app.use('/api/user',routeUser)
app.use('/api/order',routeOrder)
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
 }


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

