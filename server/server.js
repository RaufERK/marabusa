require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env

app.get('*', (req, res) => {
  res.json({ data: Math.random() })
})

app.listen(PORT,()=>{
  console.log('Server Startdet!!!');
})
