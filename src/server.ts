import express from 'express'

const app = express()

app.post('/users', (request, response) => {
  return response.send('<h1>User created!</h1>')
})

app.get('/users', (request, response) => {
  return response.json([
    {
      id: 1,
      name: 'Vitor Gabs'
    }
  ])
})

app.get('/books', (request, response) => {
  return response.json([
    {
      id: 1,
      title: 'The merlian: Discord'
    }
  ])
})

app.post('/users/:id/lists', (request, response) => {
  response.send(`List created for user id: ${request.params.id}`)
})

app.get('/users/:id/lists', (request, response) => {
  response.json([])
})

app.listen(3333)