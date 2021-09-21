const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//EXPRESS

app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title' :'mario is the best game ever', "content" : con };
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

let outputTowrite = `The name of the client is ${name}, ${age} year old, ${gender}, residing at ${address}. more about him/her: ${more}`
    fs.writeFileSync('output.txt', outputTowrite )
    const params = {'message': 'your form has been submitted successfully', }
    res.status(200).render('index.pug', params)
})

app.listen(port,()=>{
    console.log(`The application started sucessfully on port ${port}`);

})