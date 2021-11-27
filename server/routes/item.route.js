const express = require('express')
const router = express.Router()
var Item = require('../models/Item.model')
const googleStorage = require('../controllers/googleStorage')
const Multer = require('multer');
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
});
router.get('/getItem',async (req,res)=>{
    try {
        const product = await Item.find();
        res.json(product)
    } catch (error) {
        res.json({mess:error})
    }
})
router.get('/getProductMain',async (req,res)=>{
    try {
        const product = await Item.find().limit(4)
      
        
        res.json(product)
    } catch (error) {
        res.json({mess:error})
    }
})
router.post('/postItem', multer.single('file'), googleStorage.sendImg)

router.get('/:postId',async (req,res)=>{
    try {
        const product = await Item.findById(req.params.postId);
        res.json(product)
    } catch (error) {
        res.json({mess:error})
    }
})
router.delete('/:postId',async (req,res)=>{
    try {
        const removedProduct = await Item.remove({_id:req.params.postId});
        res.json(removedProduct)
    } catch (error) {
        res.json({mess:error})
    }
})
router.patch('/:postId',async (req,res)=>{
    try{
        const updatedProduct = await Item.updateOne({_id:req.params.postId},
            {$set:{name:req.body.name}});
            res.json(updatedProduct)
    }catch(err){
        res.json({mess:err})
    }
})
module.exports = router