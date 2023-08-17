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
app.get("/x", (req, res) => {
    console.log(req);
    res.send(msi());
    
});
function msi (){
    return "สวัสดี"

}
    
app.get('/user', (req, res) => {
    res.json(users)
})
app.get('/user/:x', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.x)))
})
app.post('/user', (req, res) => {
    users.push(req.body)
    let Err = true
    if (Err == true){
       res.sendStatus()
    }
    let json = req.body
    res.send (`เพิ่มรายชื่อแล้วนะ '${json.username}' เสร็จเรียบร้อย.`)
  })

app.get('/park',(req,res)=>{
    console.log(req.query.id);
    res.send(out.query)

})
app.listen(port, () => {
    console.log("เริ่มแล้ว " + port);
});
 
  //ตอนบ่ายมาต่อ.. 
  // app.get(()=>{
    
// })