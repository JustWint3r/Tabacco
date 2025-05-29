import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../lib/CartContext';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
        className="cart-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="购物车"
      >
        <svg 
          className="cart-icon"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {totalItems > 0 && (
          <span className="cart-badge">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-content">
            <h3 className="cart-title">购物车</h3>
            {items.length === 0 ? (
              <p className="cart-empty">购物车是空的</p>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <div className="cart-item-pricing">
                          <p className="cart-item-base-price">单价: {item.price}</p>
                          <p className="cart-item-total-price">
                            小计: ¥{(item.numericPrice * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="cart-item-actions">
                        <div className="cart-quantity-controls">
                          <button
                            className="cart-quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="cart-quantity">{item.quantity}</span>
                          <button
                            className="cart-quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          title="移除商品"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>总计:</span>
                    <span>¥{totalPrice.toFixed(2)}</span>
                  </div>
                  <button
                    className="cart-checkout-btn"
                    onClick={() => {
                      navigate('/checkout');
                      setIsOpen(false);
                    }}
                  >
                    立即下单
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