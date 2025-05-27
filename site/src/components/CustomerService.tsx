import React from 'react';

const CustomerService: React.FC = () => {
  return (
    <section id="contact" className="customer-service-section">
      <div className="container">
        <h2 className="section-title">联系客服</h2>
        <div className="contact-info">
          <p>如有任何问题，欢迎随时咨询我们的客服团队</p>
          
          <div className="contact-item">
            <h3 className="text-xl font-semibold mb-2">客服1:</h3>
            <p>微信: JJteo01</p>
            <p>邮箱: service@tobaccoshop.com</p>
          </div>
          
          <div className="contact-item">
            <h3 className="text-xl font-semibold mb-2">客服2:</h3>
            <p>微信: Jacksonnct</p>
            <p>QQ: 1460642168</p>
          </div>
          
          <div className="contact-item mt-6">
            <h3 className="text-xl font-semibold mb-2">工作时间:</h3>
            <p>周一至周日 09:00-21:00 (节假日除外)</p>
          </div>
          
          <div className="mt-8">
            <p className="text-lg">我们承诺在15分钟内回复您的咨询</p>
            <button className="btn mt-4">立即联系</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
