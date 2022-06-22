const express= require ('express');
const app = express();
const path= require ('path');
const publicPath= path.resolve(__dirname,'./public');

app.use (express.static(publicPath)); // Usamos la carpeta public con recursos estaticos y podamos consumirlos de forma sencilla.

app.listen (process.env.PORT||3000, ()=>{
    console.log ('http://localhost:3000');
});

app.get ('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})   

app.get ('/register.html', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})   

app.get ('/login.html', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
}) 