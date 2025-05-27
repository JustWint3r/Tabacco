import React from 'react';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src={logo} alt="Tobacco Shop Logo" style={{ height: '60px' }} />
          </div>
          <nav>
            <ul className="nav-menu">
              <li><a href="#products">商店</a></li>
              <li><a href="#hand-roll">手卷</a></li>
              <li><a href="#tobacco">斗丝</a></li>
              <li><a href="#accessories">耗材</a></li>
              <li><a href="#cigars">雪茄</a></li>
              <li><a href="#finished">成品</a></li>
              <li><a href="#contact">联系我们</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
