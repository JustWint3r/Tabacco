import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Cart from './Cart';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Tobacco Shop Logo" style={{ height: '60px', cursor: 'pointer' }} />
            </Link>
          </div>
          <nav className="flex items-center">
            <ul className="nav-menu">
              <li><a href="#products">商店</a></li>
              <li><Link to="/hand-roll">手卷</Link></li>
              <li><a href="#tobacco">斗丝</a></li>
              <li><a href="#accessories">耗材</a></li>
              <li><a href="#cigars">雪茄</a></li>
              <li><a href="#finished">成品</a></li>
              <li><a href="#contact">联系我们</a></li>
            </ul>
            <div className="ml-4">
              <Cart />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
