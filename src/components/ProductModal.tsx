import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">${product.price}</p>
                <p className={`text-sm font-medium ${
                  product.stock > 0 
                    ? product.stock < 10 
                      ? 'text-orange-600' 
                      : 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {product.stock > 0 
                    ? product.stock < 10 
                      ? `Only ${product.stock} left in stock!` 
                      : 'In Stock'
                    : 'Out of Stock'}
                </p>
              </div>
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                disabled={product.stock === 0}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  product.stock === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}