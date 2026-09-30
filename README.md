# Marketplace App

A responsive two-sided marketplace web application built with React, Node.js, Express, MongoDB, Tailwind CSS, and Stripe-ready checkout.

## Features
- Buyer and seller registration and login
- JWT authentication with role-based access control
- Product listing creation, editing, and deletion
- Product search and filtering
- Cart and checkout flow
- Stripe-ready payment endpoint
- Admin dashboard to manage users and listings
- Mobile-friendly modern UI
- Backend validation and structured error handling

## Repository structure

```text
marketplace-app/
├── README.md
├── .gitignore
├── package.json
├── backend/
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   ├── adminController.js
│       │   ├── authController.js
│       │   ├── orderController.js
│       │   └── productController.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   ├── errorMiddleware.js
│       │   └── roleMiddleware.js
│       ├── models/
│       │   ├── Order.js
│       │   ├── Product.js
│       │   └── User.js
│       ├── routes/
│       │   ├── adminRoutes.js
│       │   ├── authRoutes.js
│       │   ├── orderRoutes.js
│       │   └── productRoutes.js
│       └── utils/
│           └── generateToken.js
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── api/
│       │   └── client.js
│       ├── components/
│       │   ├── Footer.jsx
│       │   ├── Navbar.jsx
│       │   ├── ProductCard.jsx
│       │   └── SectionTitle.jsx
│       ├── contexts/
│       │   └── AuthContext.jsx
│       ├── data/
│       │   └── mockData.js
│       ├── index.css
│       ├── main.jsx
│       └── pages/
│           ├── CartPage.jsx
│           ├── DashboardPage.jsx
│           ├── HomePage.jsx
│           ├── LoginPage.jsx
│           ├── ProductDetailPage.jsx
│           ├── ProductsPage.jsx
│           └── RegisterPage.jsx
└── .env.example
```

## Quick start

### 1. Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 2. Configure environment

Create a `.env` file in `backend/` based on `.env.example` and add your MongoDB URI and Stripe secret key.

### 3. Run the app

```bash
npm run dev --prefix backend
npm run dev --prefix frontend
```

Or use the root script if present.

## Notes
- MongoDB must be running locally or using MongoDB Atlas.
- Stripe checkout is implemented in a Stripe-ready way with fallback mock behavior if no key is set.
- The frontend includes mock product data so it can still render before the backend is connected.

## License
MIT
