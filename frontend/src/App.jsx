import { useAuth } from '../contexts/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome, {user?.name || 'Seller'}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Active listings</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">24</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Orders</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">48</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Revenue</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">$12.4k</p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Manage your storefront</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button className="rounded-2xl bg-slate-100 px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-200">Create listing</button>
          <button className="rounded-2xl bg-slate-100 px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-200">View orders</button>
          <button className="rounded-2xl bg-slate-100 px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-200">Review analytics</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
