const passport = require('passport');
const date = require('../getDate.js');
const { fetchDatas } = require('../models/data');
const Data = require('../models/data');
const User = require ('../models/user.js')



exports.getMainPage =  (request, response)=>{
    Data.fetchDatas(Datas =>{
        console.log(Datas);



        let today = date.getDate();
        response.render('index', {dateToRender: today, myDatas: Datas});
    })


}








exports.postData = (req,res)=>{
    console.log(req.body.userData);
    const newData = new Data(req.body.personalinfo,req.body.education,req.body.technical_skills,req.body.soft_skills,req.file.filename);
    
    newData.saveData();

    res.redirect('/');
}






exports.getRegisterPage = (req,res)=>{
    res.render('register');
};





exports.postRegister = (req,res)=>{
    User.register({username: req.body.username},req.body.password,(error,user)=>{
        if(error){
            console.log(error);
            res.redirect('/register');
        }else{
            passport.authenticate('local')(req,res,()=>{
                res.render('admin')
            });
        }
    })
};




exports.getLoginPage = (req,res)=>{
    res.render('login');
};





exports.postLogin = (req,res)=>{
    const user= new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user,(error)=>{
        if(error){
            console.log(error);
            res.redirect('/login');
        }else{
            passport.authenticate('local')(req,res,()=>{
                res.redirect('/admin');
            });
        }
    })
};



exports.getAdminPage = (req,res)=>{
    if(req.isAuthenticated()){
        res.render('admin');
    }else{
        res.redirect('/login');
    }
};



exports.userLogout=(req,res)=>{
    req.logout();
    res.redirect('/');
};



