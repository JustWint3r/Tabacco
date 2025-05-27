import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>service@tobaccoshop.com</p>
        <p>周一至周日 09:00-21:00 (节假日除外)</p>
        <p>Copyright © {new Date().getFullYear()} Tobacco Shop</p>
        <p className="health-warning">吸烟有害健康，如未达到法定年龄，请停止浏览我们的网站</p>
      </div>
    </footer>
  );
};

export default Footer;
