import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const stockStatus = product.stock > 0 
    ? product.stock < 10 
      ? `Only ${product.stock} left!` 
      : 'In Stock'
    : 'Out of Stock';

  const stockClassName = product.stock > 0 
    ? product.stock < 10 
      ? 'text-orange-600' 
      : 'text-green-600'
    : 'text-red-600';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onViewDetails(product)}
        />
        <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-white ${stockClassName}`}>
          {stockStatus}
        </span>
      </div>
      <div className="p-4">
        <h3 
          className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className={`p-2 rounded-full transition-colors ${
              product.stock === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}