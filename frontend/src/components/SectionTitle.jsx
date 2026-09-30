import { Link } from 'react-router-dom';

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="mb-8">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p>
    <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>
    {description && <p className="mt-3 max-w-2xl text-slate-600">{description}</p>}
  </div>
);

export default SectionTitle;
