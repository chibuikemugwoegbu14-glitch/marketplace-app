import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-black tracking-tight text-slate-900">
          MarketFlow
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-400">
            Login
          </Link>
          <Link to="/register" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            Join
          </Link>
          <Link to="/cart" className="relative rounded-full border border-slate-300 p-2 text-slate-700">
            <span className="text-lg">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
