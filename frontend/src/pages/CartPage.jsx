import { Link, useParams } from 'react-router-dom';
import { mockProducts } from '../data/mockData';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="mx-auto max-w-7xl px-4 py-16 text-center text-slate-600">Product not found.</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2">
        <img src={product.images[0]} alt={product.name} className="h-[500px] w-full rounded-3xl object-cover" />

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">{product.category}</span>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">{product.name}</h1>
          <p className="mt-4 text-3xl font-bold text-slate-900">${product.price}</p>
          <p className="mt-6 text-slate-600">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => addToCart(product)} className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-700">
              Add to cart
            </button>
            <Link to="/products" className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:border-slate-400">
              Continue shopping
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Sold by <span className="font-semibold text-slate-900">{product.seller}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
