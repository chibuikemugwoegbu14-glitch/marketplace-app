const requireRole = (role) => (req, res, next) => {
  if (!req.user || req.user.role !== role) {
    return res.status(403).json({ message: `Access denied. ${role} role required.` });
  }

  next();
};

const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required.' });
  }

  next();
};

const requireSeller = (req, res, next) => {
  if (!req.user || !['seller', 'admin'].includes(req.user.role)) {
    return res.status(403).json({ message: 'Seller access required.' });
  }

  next();
};

module.exports = { requireRole, requireAdmin, requireSeller };
