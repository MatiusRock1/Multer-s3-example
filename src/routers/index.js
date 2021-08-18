const express = require('express');
const router = express.Router();
const multer = require('multer');
const mimeTypes = require('mime-types')

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




module.exports = router;