const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req,res){
    res.json({message:'Hello World'});
});

app.get('/api/get', function(req,res){
    res.send("api");
});

app.post('/post',function(req,res){
    res.send(req.body)
    console.log(req.body);
});

// app.listen(3000, function(){});
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);