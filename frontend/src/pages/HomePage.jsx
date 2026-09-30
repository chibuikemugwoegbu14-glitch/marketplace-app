import { Link } from 'react-router-dom';

const HomePage = ({ products, addToCart }) => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="space-y-20 pb-16">
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Shop smarter</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Buy and sell with a seamless digital marketplace.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Discover curated products, support independent sellers, and manage everything from a clean mobile-first storefront.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-700">
                Explore products
              </Link>
              <Link to="/register" className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:border-slate-400">
                Become a seller
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img className="h-full w-full rounded-3xl object-cover shadow-xl sm:col-span-2" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" alt="Marketplace storefront" />
            <img className="h-52 w-full rounded-3xl object-cover shadow-lg" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" alt="Seller goods" />
            <img className="h-52 w-full rounded-3xl object-cover shadow-lg" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" alt="Buyer shopping" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Popular picks</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Featured products</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={product.images[0]} alt={product.name} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                  <span className="font-bold text-slate-900">${product.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <button onClick={() => addToCart(product)} className="mt-5 w-full rounded-full bg-slate-900 px-4 py-2.5 font-medium text-white hover:bg-slate-700">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
