require('dotenv').config();
const express = require ('express');
const session = require('express-session');
const passport = require('passport');
const mainRoutes = require('./routes/mainRoutes');






const app = express();

require('./models/db'); //connect to the db

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.static('images'));



//initialize session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use(mainRoutes);






const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
