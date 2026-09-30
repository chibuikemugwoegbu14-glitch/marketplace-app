const express = require('express');
const protect = require('../middleware/authMiddleware');
const { createCheckoutSession, getMyOrders } = require('../controllers/orderController');

const router = express.Router();

router.post('/checkout', protect, createCheckoutSession);
router.get('/my-orders', protect, getMyOrders);

module.exports = router;
