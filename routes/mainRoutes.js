var express = require('express')
const router = express.Router();

const mainController = require('../controllers/mainController');



router.get('/', mainController.getMainPage);


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

 router.post ('/', upload.single('userFile'), mainController.postData);

module.exports = router;