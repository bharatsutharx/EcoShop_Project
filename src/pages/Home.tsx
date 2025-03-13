import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

export function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      const { data } = await supabase
        .from('products')
        .select()
        .limit(4)
        .order('created_at', { ascending: false });

      if (data) {
        setFeaturedProducts(data);
      }
    }

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to EcoShop
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our curated collection of high-quality products
        </p>
        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Shop Now
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <ShoppingBag className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">
            Carefully selected items for your satisfaction
          </p>
        </div>
        <div className="text-center p-6">
          <Truck className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Quick and reliable shipping to your doorstep
          </p>
        </div>
        <div className="text-center p-6">
          <Shield className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
          <p className="text-gray-600">
            Safe and protected online shopping experience
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button
                    onClick={() => addItem(product)}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}