const express = require('express');
const protect = require('../middleware/authMiddleware');
const { requireAdmin } = require('../middleware/roleMiddleware');
const { getUsers, getAllListings, updateUserRole, toggleProductApproval } = require('../controllers/adminController');

const router = express.Router();

router.get('/users', protect, requireAdmin, getUsers);
router.get('/listings', protect, requireAdmin, getAllListings);
router.patch('/users/:id/role', protect, requireAdmin, updateUserRole);
router.patch('/listings/:id/approve', protect, requireAdmin, toggleProductApproval);

module.exports = router;
