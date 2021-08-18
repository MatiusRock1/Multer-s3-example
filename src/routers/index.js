const express = require('express');
const router = express.Router();
const multer = require('multer');
const mimeTypes = require('mime-types');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');

aws.config.update({region: 'us-west-2'});
var s3 = new aws.S3({apiVersion: '2006-03-01'})



const uploads3 = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'matius-tp-test',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now() + "." + mimeTypes.extension(file.mimetype))
      }
    })
  })


  const storage = multer.diskStorage({
    destination : 'uploads/',
    filename : function(req,file,cb){
        cb("",Date.now() + "." + mimeTypes.extension(file.mimetype));
    }
  });
  
  const upload = multer({
      storage : storage
  })




router.get('/' , async (req,res) => {
 res.send("hola mundo");

});

router.post("/files",upload.single('Archivo'),(req,res)=>{
res.send('good');
});
router.post("/filess3",uploads3.single('Archivo'),(req,res)=>{
    res.send('good');
    });




module.exports = router;