const date = require('../getDate.js');

exports.getMainPage =(req,res)=>{//req - request , res-response
    let today = date.getDate();
    response.render('index', {dateToRender: today});
}