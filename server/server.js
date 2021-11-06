require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env
const path = require('path')

app.get('*', (req, res) => {
  res.json({ data: Math.random() , path: path.resolve('server.js')})
})

app.listen(PORT,()=>{
  console.log('Server Startdet!!!');
})
