import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'buyer' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name: formData.name, email: formData.email, role: formData.role };
    login(user, 'demo-token');
    navigate('/');
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Create account</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Join MarketFlow</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
            <select name="role" value={formData.role} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <button type="submit" className="w-full rounded-full bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-sky-600">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
