const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Your cart</h1>

      {cartItems.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-600">
          Your cart is empty.
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src={item.images[0]} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-600">${item.price} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.id, -1)} className="h-8 w-8 rounded-full border border-slate-300">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="h-8 w-8 rounded-full border border-slate-300">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-sm font-medium text-rose-600">Remove</button>
              </div>
            ))}
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
            <div className="mt-6 space-y-3 text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <button className="mt-8 w-full rounded-full bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700">
              Proceed to checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
