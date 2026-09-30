const User = require('../models/User');
const Product = require('../models/Product');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getAllListings = async (req, res, next) => {
  try {
    const products = await Product.find({}).populate('seller', 'name email').sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = role;
    await user.save();
    res.json({ message: 'User role updated', user });
  } catch (error) {
    next(error);
  }
};

const toggleProductApproval = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    product.approved = !product.approved;
    await product.save();
    res.json({ message: 'Listing approval updated', product });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, getAllListings, updateUserRole, toggleProductApproval };
