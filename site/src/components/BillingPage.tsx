import React, { useState } from 'react';
import { useCart } from '../lib/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const BillingPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingCost] = useState(50); // Fixed shipping cost
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    orderNotes: '',
    paymentMethod: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handlePlaceOrder = () => {
    // Validate that at least one payment method is selected
    if (!formData.paymentMethod) {
      alert('请选择支付方式');
      return;
    }
    
    // Here you would typically submit the order to your backend
    alert('订单已提交！我们会尽快与您联系确认支付详情。');
    clearCart();
    navigate('/');
  };

  const subtotal = totalPrice;
  const total = subtotal + shippingCost;

  return (
    <div className="billing-page">
      <Header />
      <div className="container">
        <div className="billing-content">
          <div className="billing-form-section">
            <div className="billing-details">
              <h2>账单详情</h2>
              <form className="billing-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">姓名 <span className="required">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">姓氏 <span className="required">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">公司名称（可选）</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">国家/地区 <span className="required">*</span></label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">选择国家/地区...</option>
                    <option value="china">中国</option>
                    <option value="hk">香港</option>
                    <option value="tw">台湾</option>
                    <option value="sg">新加坡</option>
                    <option value="my">马来西亚</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="streetAddress">街道地址 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    placeholder="门牌号和街道名称"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="apartment"
                    placeholder="公寓、套房、单元等（可选）"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="apartment-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">城镇/城市 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">省份/州 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="postcode">邮政编码/ZIP <span className="required">*</span></label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">电话 <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">电子邮件地址 <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>支付方式 <span className="required">*</span></label>
                  <div className="shipping-checkbox">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="wechatPay"
                        checked={formData.paymentMethod === 'wechatPay'}
                        onChange={handleInputChange}
                      />
                      微信支付
                    </label>
                  </div>

                  <div className="shipping-checkbox">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="qqPay"
                        checked={formData.paymentMethod === 'qqPay'}
                        onChange={handleInputChange}
                      />
                      QQ支付
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="orderNotes">订单备注</label>
                  <textarea
                    id="orderNotes"
                    name="orderNotes"
                    placeholder="请填写您的微信/QQ号。"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="order-summary-section">
            <div className="order-summary">
              <h3>您的订单</h3>
              <div className="order-table">
                <div className="order-header">
                  <span>产品</span>
                  <span>小计</span>
                </div>
                {items.map((item) => (
                  <div key={item.id} className="order-item">
                    <span className="item-name">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="item-price">¥ {(item.numericPrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="order-subtotal">
                  <span>小计</span>
                  <span>¥ {subtotal.toFixed(2)}</span>
                </div>
                <div className="order-shipping">
                  <span>配送</span>
                  <span>1公斤：¥ {shippingCost.toFixed(2)}</span>
                </div>
                <div className="order-total">
                  <span>总计</span>
                  <span>¥ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="payment-info">
                <h4>手动支付</h4>
                <p>华盛哥将会联系您有关支付方式（支付宝/微信），请使用如下备注为付款备注。我们会在收到款项后配送订单。</p>
              </div>

              <button 
                className="place-order-btn"
                onClick={handlePlaceOrder}
              >
                提交订单
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage; 