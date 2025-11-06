'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart-store';
import { formatPrice } from '@/lib/utils';
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotal = useCartStore((state) => state.getTotal);

  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-white p-6 rounded-lg shadow"
              >
                <div className="flex gap-4">
                  {/* Product Image Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center flex-shrink-0">
                    <div className="text-3xl">
                      {item.product.category === 'apparel' && '👕'}
                      {item.product.category === 'glassware' && '🍺'}
                      {item.product.category === 'accessories' && '🎯'}
                      {item.product.category === 'homegoods' && '🏠'}
                      {item.product.category === 'collectibles' && '⭐'}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-bold text-lg hover:text-amber-700"
                        >
                          {item.product.name}
                        </Link>
                        <div className="text-sm text-gray-600">
                          {item.brewery.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                        <div className="text-sm text-gray-600">
                          {formatPrice(item.product.price)} each
                        </div>
                      </div>
                    </div>

                    {/* Size and Color */}
                    <div className="flex gap-4 text-sm text-gray-600 mb-3">
                      {item.selectedSize && (
                        <span>Size: {item.selectedSize}</span>
                      )}
                      {item.selectedColor && (
                        <span>Color: {item.selectedColor}</span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                          className="w-8 h-8 border-2 border-gray-300 rounded hover:border-amber-700 font-bold"
                        >
                          <Minus className="w-4 h-4 mx-auto" />
                        </button>
                        <span className="font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                          className="w-8 h-8 border-2 border-gray-300 rounded hover:border-amber-700 font-bold"
                        >
                          <Plus className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor
                          )
                        }
                        className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-amber-900">{formatPrice(total)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-amber-900 text-white py-3 rounded-lg font-semibold text-center hover:bg-amber-800 transition mb-3"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                className="block w-full text-center text-amber-700 hover:text-amber-900 font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
