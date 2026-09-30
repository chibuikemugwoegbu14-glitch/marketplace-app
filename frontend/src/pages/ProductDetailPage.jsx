import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/mockData';

const ProductsPage = ({ products, addToCart }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, products, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Marketplace</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Browse products</h1>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 md:w-72"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-full border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500"
          >
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
