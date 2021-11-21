const express = require ("express");

const users = require("./MOCK_DATA.json");

const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send({users})
})

app.get("/:author",(req,res)=>{
    const newUsers = req.params.author;
    const id = req.id;
    res.send({newUsers,id});
})

app.post("/",(req,res)=>{
    
    const newUsers = [...users,req.body];
    console.log(req.body);
    res.send(newUsers);
})

app.patch("/:author",(req,res)=>{
    console.log(req.params.author);
    // res.send("patch");

    const newUsers = users.map(user=>{
        if(req.params.author === user.author){
            user = req.body;
        }
        return user;
    });
    res.send(newUsers);

})

app.delete("/:author",(req,res)=>{
    const newUsers = users.filter((user)=> user.author !== req.params.author);
    res.send(newUsers)
});



app.listen(3000,(req,res)=>{
    console.log("working")
})