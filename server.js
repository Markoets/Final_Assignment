const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static('images'));
app.use(require('./routes/mainRoutes'));





const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});