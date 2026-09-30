const express = require('express');
const protect = require('../middleware/authMiddleware');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { requireSeller, requireAdmin } = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, requireSeller, createProduct);
router.put('/:id', protect, requireSeller, updateProduct);
router.delete('/:id', protect, requireSeller, deleteProduct);

module.exports = router;
