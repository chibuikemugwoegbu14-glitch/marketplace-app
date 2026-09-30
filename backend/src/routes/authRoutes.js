const express = require('express');
const protect = require('../middleware/authMiddleware');
const { requireAdmin, requireSeller } = require('../middleware/roleMiddleware');
const {
  registerUser,
  loginUser,
  getMe,
  validateRegistration,
  validateLogin,
  handleValidation,
} = require('../controllers/authController');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { createCheckoutSession, getMyOrders } = require('../controllers/orderController');
const { getUsers, getAllListings, updateUserRole, toggleProductApproval } = require('../controllers/adminController');

const router = express.Router();

router.post('/register', validateRegistration, handleValidation, registerUser);
router.post('/login', validateLogin, handleValidation, loginUser);
router.get('/me', protect, getMe);

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, requireSeller, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
