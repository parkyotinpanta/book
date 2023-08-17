const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const users = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send("หน้าแรก --- userbook");
});
app.get('/user', (req, res) => {
    res.json(users)
})
app.get('/user/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
})
app.post('/user', (req, res) => {
    users.push(req.body)
    let json = req.body
    res.send(`เพิ่มรายชื่อแล้วนะ '${json.username}' เสร็จเรียบร้อย.`)
  })
app.listen(port, () => {
    console.log("Starting node.js at port " + port);
});
app.put('/users/:id', (req, res) => {
    const updateIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send(`Update user id: '${users[updateIndex].id}' completed.`)
  })
  //ตอนบ่ายมาต่อ..