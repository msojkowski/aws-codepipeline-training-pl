const express = require('express')

const app = express()

// Definicje endpointów
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World! This is running on Express!' })
})

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test endpoint working! Modified endpoint!' })
})

module.exports = app
