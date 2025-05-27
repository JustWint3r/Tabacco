import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../lib/CartContext';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-white hover:text-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="购物车"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">购物车</h3>
            {items.length === 0 ? (
              <p className="text-gray-500">购物车是空的</p>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600">{item.price} × {item.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 ml-2 w-6 h-6 flex items-center justify-center"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>总计:</span>
                    <span>¥{totalPrice.toFixed(2)}</span>
                  </div>
                  <button
                    className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      alert('即将跳转到结账页面');
                    }}
                  >
                    结账
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 