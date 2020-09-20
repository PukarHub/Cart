const  express =  require('express')
const router = express.Router();

const Product = require('../../models/Product');


// Gets all the Products
router.get('/api/id', async (req,res) => {
        try {
            const product = await Product.find({product: req.product})
            res.json(product)     
        } catch (error) {
            res.json({message: error})
        }
    })

//  //  Submits a product
//   router.post("/", async (req,res) => {
//     const product = new Product({
//         name : req.body.name,
//         price: req.body.price
//     });
//     try {
//         const savedProduct = await product.save();
//           res.json(savedProduct);
//     } catch (error) {
//         res.json({message: error});
//     }
//   });

// //  Get specific Product
// router.get('/:id', async (req,res) => {
//     try {
//         const product = await Product.findById(req.params.id)
//         res.json(product)
//     } catch (error) {
//         res.json({message: error})
//     }
// })

// // Update a product
// router.patch('/:id', async (req,res) => {
//     try {
//         const updateProduct = await Product.updateOne({_id:req.params.id}, {$set: {name: req.body.name}})
//         res.json(updateProduct)
//     } catch (error) {
//         res.json({message: error})
//     }
// })

// //  Delete a Product
// router.delete('/:id', async(req,res) => {
//     try {
//         const removedProduct = await Product.remove({_id: req.params.id});
//         res.json(removedProduct)
//     } catch (error) {
//         res.json({message: error})
//     }
// });


// @route POST api/products/test
// @desc   Tests products route
// @access   Public
router.post('/', async (req, res) => {
    const { name, price, avatar } = req.body;

    try {
        const products = new Product({
            name,
            price,
            avatar,
        });

        const product = await products.save();

        console.log(product);

        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.send('Server Error');
    }
});


module.exports = router;
