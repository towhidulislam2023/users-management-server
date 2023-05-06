const express = require('express')
const app = express()
const port = process.env.PORT||5000
 const user=[
    {id:1,name:"Sabrina Khatun",email:"sabrina#@sabro.com"},
    {id:2,name:"Sornalli Begum",email:"sornali#@sabro.com"},
    {id:3,name:"Sabila Khatun",email:"sabila#@sabro.com"},
    {id:4,name:"Saba khabir",email:"saba#@sabro.com"},
    {id:5,name:"sabnor aich",email:"sabnor#@sabro.com"},
]
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send(user)
})
app.post("/users",(req,res)=>{
    console.log("Post Api Hitting");
    console.log(req.body);  
    user.push(req.body)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})