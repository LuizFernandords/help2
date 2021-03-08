const {getUsers, getUserById, createUser} = require('./routes/users/users');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', getUsers)
app.get('/users/:id', getUserById)
app.post('/users', createUser)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })