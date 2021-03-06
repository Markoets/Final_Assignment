const express = require('express')
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController');
const router = express.Router();





let upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb) =>{
         cb(null,'./images')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
        }
    }) 
 });


 router.get('/', mainController.getMainPage);

 router.get('/admin', mainController.getAdminPage);
  
 router.post ('/admin', upload.single('userFile'), mainController.postData);

 router.get('/register',mainController.getRegisterPage);
 router.post('/register',mainController.postRegister);
 router.get('/login',mainController.getLoginPage);
 router.post('/login',mainController.postLogin);

 
 
 router.get('/logout',mainController.userLogout);
 


module.exports = router;