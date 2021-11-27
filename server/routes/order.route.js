var express = require('express')
var router = express.Router()


var Order = require('../models/Order.model.js')
var Item = require('../models/Item.model')

router.post('/postInvoice',async (req,res)=>{
    const order = new Order({
        cusname:req.body.cusname,
        "address.town":req.body.town,
        "address.city":req.body.city,
    })
    try {
        const savedInvoice = await order.save();
        res.json(savedInvoice)
    } catch (error) {
        res.json({mess:error})
    }
})
router.post('/postOrder',async (req,res)=>{
    const order = new Order({
        cusname:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        cart:req.body.cart,
        "address.town":req.body.address1,
        "address.city":req.body.address2,
    })
    try {
        const savedOrder = await order.save()
       res.json(savedOrder)
    } catch (error) {
        res.json({mess:error})
    }
})
router.post("/postOrder1", (req, res, next) => {
    Item.findById(req.body.productId)
      .then(product => {
        if (!product) {
          return res.status(404).json({
            message: "Item not found"
          });
        }
        const order = new Order({
            cusname:req.body.cusname,
            email:req.body.email,
            phone:req.body.phone,
            "address.town":req.body.town,
            "address.city":req.body.city,
            product:req.body.productId
        })
        return order.save();
      })
      .then(result => {
        // console.log(result);
        res.status(201).json({
          message: "Order stored",
          createdOrder: {
            _id: result._id,
            product: result.product,
            quantity: result.quantity
          },
          
        });
      })
      .catch(err => {
        // console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  router.get("/getOrder", (req, res, next) => {
    Order.find()
      .select("product quantity _id")
      .populate('product')
      .exec()
      .then(docs => {
        res.status(200).json({
          count: docs.length,
          orders: docs.map(doc => {
            return {
              _id: doc._id,
              product: doc.product,
              quantity: doc.quantity,
              request: {
                type: "GET",
                url: "http://localhost:3000/orders/" + doc._id
              }
            };
          })
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
  
module.exports = router;