import React, { useState } from 'react';
import { useCart } from '../lib/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [shippingCost] = useState(0); // Free shipping for now

  const handleApplyCoupon = () => {
    // Simple coupon logic - you can expand this
    const validCoupons = {
      'WELCOME10': 0.1,
      'SAVE20': 0.2,
      'FIRST15': 0.15
    };

    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      setAppliedCoupon({
        code: couponCode,
        discount: validCoupons[couponCode as keyof typeof validCoupons]
      });
    } else {
      alert('无效的优惠券代码');
    }
  };

  const subtotal = totalPrice;
  const discountAmount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const finalTotal = subtotal - discountAmount + shippingCost;

  const handleProceedToCheckout = () => {
    if (items.length === 0) {
      alert('购物车为空，请先添加商品');
      return;
    }
    
    // Here you would typically integrate with a payment processor
    alert('即将跳转到支付页面...');
    // For demo purposes, we'll clear the cart and redirect
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <Header />
        <div className="container">
          <div className="checkout-header">
            <button 
              className="back-button"
              onClick={() => navigate('/')}
            >
              ← 返回商店
            </button>
            <h1 className="checkout-title">购物车</h1>
          </div>
          <div className="empty-cart">
            <div className="empty-cart-content">
              <svg className="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h2>购物车为空</h2>
              <p>您还没有添加任何商品到购物车</p>
              <button 
                className="btn"
                onClick={() => navigate('/')}
              >
                继续购物
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Header />
      <div className="container">
        <div className="checkout-header">
          <button 
            className="back-button"
            onClick={() => navigate('/')}
          >
            ← 返回商店
          </button>
          <h1 className="checkout-title">购物车结算</h1>
        </div>

        <div className="checkout-content">
          <div className="checkout-main">
            <div className="cart-table-container">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>商品</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="cart-table-row">
                      <td className="product-cell">
                        <div className="product-info">
                          <img src={item.image} alt={item.name} className="product-image" />
                          <span className="product-name">{item.name}</span>
                        </div>
                      </td>
                      <td className="price-cell">¥ {item.numericPrice.toFixed(2)}</td>
                      <td className="quantity-cell">
                        <div className="quantity-controls">
                          <button
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="quantity-input"
                            min="1"
                          />
                          <button
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="subtotal-cell">¥ {(item.numericPrice * item.quantity).toFixed(2)}</td>
                      <td className="action-cell">
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          title="移除商品"
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="coupon-section">
              <div className="coupon-input-group">
                <input
                  type="text"
                  placeholder="优惠券代码"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <button 
                  className="apply-coupon-btn"
                  onClick={handleApplyCoupon}
                >
                  应用优惠券
                </button>
              </div>
              {appliedCoupon && (
                <div className="applied-coupon">
                  <span>已应用优惠券: {appliedCoupon.code} (-{(appliedCoupon.discount * 100).toFixed(0)}%)</span>
                  <button onClick={() => setAppliedCoupon(null)}>×</button>
                </div>
              )}
              <button className="update-cart-btn">更新购物车</button>
            </div>
          </div>

          <div className="checkout-sidebar">
            <div className="payment-methods">
              <h4>支付方式</h4>
              <div className="payment-options">
                <div className="payment-option">
                  <span>💳</span>
                  <span>支付宝</span>
                </div>
                <div className="payment-option">
                  <span>💰</span>
                  <span>微信支付</span>
                </div>
                <div className="payment-option">
                  <span>🏦</span>
                  <span>银行转账</span>
                </div>
              </div>
            </div>

            <div className="cart-totals">
              <h3 className="totals-title">购物车总计</h3>
              
              <div className="totals-row">
                <span>小计</span>
                <span>¥ {subtotal.toFixed(2)}</span>
              </div>

              {appliedCoupon && (
                <div className="totals-row discount-row">
                  <span>优惠券折扣 ({appliedCoupon.code})</span>
                  <span>-¥ {discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="totals-row">
                <span>运费</span>
                <span>{shippingCost === 0 ? '免费配送' : `¥ ${shippingCost.toFixed(2)}`}</span>
              </div>

              <div className="shipping-info">
                <p>结账时将更新配送选项。</p>
              </div>

              <div className="totals-row total-row">
                <span>总计</span>
                <span>¥ {finalTotal.toFixed(2)}</span>
              </div>

              <button 
                className="checkout-btn"
                onClick={handleProceedToCheckout}
              >
                立即下单
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 