const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_mock');
const Order = require('../models/Order');
const Product = require('../models/Product');

const createCheckoutSession = async (req, res, next) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const productIds = items.map((item) => item.productId);
    const products = await Product.find({ _id: { $in: productIds } });

    if (!products.length) {
      return res.status(400).json({ message: 'One or more products were not found' });
    }

    const lineItems = items.map((item) => {
      const product = products.find((p) => p._id.toString() === item.productId);
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product?.name || 'Marketplace item',
          },
          unit_amount: Math.round(Number(product?.price || item.price) * 100),
        },
        quantity: item.quantity,
      };
    });

    let session;

    if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== 'sk_test_mock') {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: lineItems,
        success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/cart`,
        metadata: {
          buyerId: req.user._id.toString(),
        },
      });
    } else {
      session = {
        id: `mock_session_${Date.now()}`,
        url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/checkout-success?session_id=mock_session_${Date.now()}`,
      };
    }

    const total = items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);

    const order = await Order.create({
      buyer: req.user._id,
      items: items.map((item) => ({
        product: item.productId,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
      shippingAddress,
      stripeSessionId: session.id,
      status: 'paid',
    });

    res.status(201).json({
      message: 'Order created successfully',
      order,
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    next(error);
  }
};

const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ buyer: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCheckoutSession, getMyOrders };
