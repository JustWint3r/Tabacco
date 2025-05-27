import React from 'react';

const PaymentSection: React.FC = () => {
  return (
    <section id="payment" className="payment-section">
      <div className="container">
        <h2 className="section-title">付款方式</h2>
        <div className="qr-code-container">
          <img src="https://via.placeholder.com/200x200?text=Payment+QR+Code" alt="Payment QR Code" />
          <p>扫描上方二维码进行付款</p>
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">下单步骤及付款方式</h3>
          <ol className="text-left space-y-4">
            <li>1. 联系客服提供以下信息：
              <ul className="ml-6 mt-2">
                <li>- 商品名称、口味和数量</li>
                <li>- 收货地址和联系方式</li>
              </ul>
            </li>
            <li>2. 客服确认订单后，支付订金（最低300元）</li>
            <li>3. 包裹打包称重后，支付全款（包括邮费）</li>
          </ol>
          <p className="mt-6">如有任何问题，请随时联系客服</p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
