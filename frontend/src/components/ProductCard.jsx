import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => (
  <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div className="relative">
      <img src={product.images[0]} alt={product.name} className="h-64 w-full object-cover transition group-hover:scale-105" />
      {product.featured && (
        <span className="absolute left-4 top-4 rounded-full bg-sky-500 px-2 py-1 text-xs font-semibold text-white">Featured</span>
      )}
    </div>

    <div className="space-y-4 p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{product.category}</span>
        <span className="text-lg font-bold text-slate-900">${product.price}</span>
      </div>

      <div>
        <Link to={`/product/${product.id}`} className="text-xl font-semibold text-slate-900 hover:text-sky-600">
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-slate-600">{product.description}</p>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>By {product.seller}</span>
        <span>{product.stock} in stock</span>
      </div>

      <div className="flex gap-3 pt-2">
        <Link to={`/product/${product.id}`} className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-center font-medium text-slate-700 hover:border-slate-400">
          View
        </Link>
        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 rounded-full bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  </article>
);

export default ProductCard;
