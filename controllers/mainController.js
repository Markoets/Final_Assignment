const date = require('../getDate.js');
const { fetchWishes } = require('../models/data');
const Data = require('../models/data');

exports.getMainPage =  (request, response)=>{
    Data.fetchDatas(Datas =>{
        console.log(Datas);



        let today = date.getDate();
        response.render('index', {dateToRender: today, myDatas: Datas});
    })


}

exports.postData = (req,res)=>{
    console.log(req.body.userData);
    const newData = new Data(req.body.userData,req.file.filename);
    
    newData.saveData();

    res.redirect('/');
}
