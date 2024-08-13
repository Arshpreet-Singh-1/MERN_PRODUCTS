const express = require('express');
const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const router = express.Router();

router.post('/', addProduct);                   // Create Product
router.get('/', getProducts);                   // Read All Products
router.get('/:productId', getProductById);      // Read Single Product by ID
router.put('/:productId', updateProduct);       // Update Product by ID
router.delete('/:productId', deleteProduct);    // Delete Product by ID

module.exports = router;
