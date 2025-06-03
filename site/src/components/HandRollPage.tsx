import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Product {
  id: number;
  image: string;
  name: string;
  brand: string;
  category: string;
  originalPrice: number;
  salePrice: number;
}

const HandRollPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sample brand data
  const brands = [
    { name: '特惠专区', count: 2, image: '/images/brands/sale.jpg', color: '#e74c3c' },
    { name: '三星', count: 6, image: '/images/brands/three-stars.jpg', color: '#2c3e50' },
    { name: '丰收', count: 10, image: '/images/brands/harvest.jpg', color: '#8b4513' },
    { name: 'GV', count: 1, image: '/images/brands/gv.jpg', color: '#2c3e50' },
    { name: '切格瓦拉', count: 5, image: '/images/brands/che.jpg', color: '#c0392b' },
    { name: '卡布奇诺', count: 1, image: '/images/brands/cappuccino.jpg', color: '#d2691e' },
    { name: '史丹利', count: 4, image: '/images/brands/stanley.jpg', color: '#2c3e50' },
    { name: '奥斯汀', count: 2, image: '/images/brands/austin.jpg', color: '#8b0000' },
    { name: '宾利', count: 1, image: '/images/brands/bentley.jpg', color: '#2c3e50' },
    { name: '小皇家', count: 8, image: '/images/brands/royal.jpg', color: '#b8860b' },
    { name: '小骏马', count: 6, image: '/images/brands/colts.jpg', color: '#2c3e50' },
    { name: '巴厘', count: 3, image: '/images/brands/bali.jpg', color: '#d2691e' },
    { name: '巴西手卷', count: 2, image: '/images/brands/brazilian.jpg', color: '#ff8c00' },
    { name: '极限', count: 2, image: '/images/brands/excellent.jpg', color: '#800080' },
    { name: '水手', count: 1, image: '/images/brands/van-nelle.jpg', color: '#2c3e50' },
    { name: '琥珀', count: 1, image: '/images/brands/amber-leaf.jpg', color: '#228b22' },
    { name: '赢家', count: 12, image: '/images/brands/winner.jpg', color: '#ff6347' },
    { name: '瞭望', count: 2, image: '/images/brands/lookout.jpg', color: '#4169e1' },
    { name: '红场', count: 3, image: '/images/brands/red-field.jpg', color: '#dc143c' },
    { name: '红牛', count: 7, image: '/images/brands/red-bull.jpg', color: '#b22222' },
    { name: '船长', count: 5, image: '/images/brands/captain.jpg', color: '#2c3e50' },
    { name: '细嫩手卷', count: 3, image: '/images/brands/fine-cut.jpg', color: '#ffd700' },
    { name: '野牛', count: 1, image: '/images/brands/bison.jpg', color: '#8b4513' },
    { name: '阿姆斯特丹', count: 4, image: '/images/brands/amsterdam.jpg', color: '#ff8c00' },
    { name: '老本', count: 1, image: '/images/brands/old-holborn.jpg', color: '#ff8c00' },
    { name: '马琳', count: 13, image: '/images/brands/mac-baren.jpg', color: '#ffd700' },
    { name: '黑蜘蛛', count: 7, image: '/images/brands/black-spider.jpg', color: '#8b0000' },
    { name: '黑魔鬼', count: 1, image: '/images/brands/black-devil.jpg', color: '#8b0000' },
    { name: '黑鹰精装', count: 2, image: '/images/brands/black-hawk.jpg', color: '#2c3e50' },
    { name: '鼓', count: 2, image: '/images/brands/drum.jpg', color: '#b8860b' }
  ];

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      image: '/images/products/hand-roll-1.jpg',
      name: '劳动节套餐 1 - 热门品牌 (附赠品)',
      brand: '特惠专区',
      category: '促销, 特惠专区',
      originalPrice: 422.38,
      salePrice: 380.99
    },
    {
      id: 2,
      image: '/images/products/hand-roll-2.jpg',
      name: '三星经典混合烟丝',
      brand: '三星',
      category: '手卷, 三星',
      originalPrice: 89.99,
      salePrice: 79.99
    },
    {
      id: 3,
      image: '/images/products/hand-roll-3.jpg',
      name: '丰收金装优质烟丝',
      brand: '丰收',
      category: '手卷, 丰收',
      originalPrice: 156.50,
      salePrice: 139.99
    }
  ];

  const handleBrandClick = (brandName: string) => {
    setSelectedCategory(brandName);
  };

  const handleReadMore = (productId: number) => {
    // Navigate to product detail page
    console.log(`Navigate to product ${productId} details`);
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.brand === selectedCategory)
    : products;

  return (
    <div className="hand-roll-page">
      <Header />
      
      <div className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span style={{ color: '#ccc' }}>Home</span>
          <span style={{ color: '#ccc', margin: '0 10px' }}>/</span>
          <span style={{ color: '#D4AF37' }}>手卷</span>
        </div>

        {/* Page Title */}
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#D4AF37', 
          marginBottom: '40px',
          fontWeight: '600'
        }}>
          手卷
        </h1>

        {/* Brand Grid */}
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="brand-card"
              onClick={() => handleBrandClick(brand.name)}
              style={{
                backgroundColor: '#1a1a1a',
                border: '2px solid #333',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {brand.name === '特惠专区' && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  right: '20px',
                  bottom: '60px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  borderRadius: '4px'
                }}>
                  SALE<br/>特惠区
                </div>
              )}
              
              {brand.name !== '特惠专区' && (
                <div style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#D4AF37'
                }}>
                  {brand.name}
                </div>
              )}
              
              <div style={{
                fontSize: '0.9rem',
                color: '#ccc',
                marginTop: '10px'
              }}>
                {brand.name} ({brand.count})
              </div>
            </div>
          ))}
        </div>

        {/* Filter and Search */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '40px 0 20px 0',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px 15px',
                backgroundColor: '#2c3e50',
                color: 'white',
                border: '2px solid #D4AF37',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            >
              <option value="">Category</option>
              {brands.map((brand) => (
                <option key={brand.name} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
            
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: '#D4AF37',
                border: '2px solid #D4AF37',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              🔍 筛选
            </button>
          </div>

          <input
            type="text"
            placeholder="搜索"
            style={{
              padding: '10px 15px',
              backgroundColor: '#2c3e50',
              color: 'white',
              border: '2px solid #D4AF37',
              borderRadius: '4px',
              fontSize: '16px',
              width: '300px'
            }}
          />
        </div>

        {/* Product Table */}
        <div className="product-table-container" style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '2px solid #D4AF37'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: 'transparent'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#D4AF37' }}>
                <th style={{ padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'left' }}>图片</th>
                <th style={{ padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'left' }}>名称</th>
                <th style={{ padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'left' }}>类别</th>
                <th style={{ padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'left' }}>价格</th>
                <th style={{ padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'left' }}>选购</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} style={{
                  borderBottom: '1px solid #333'
                }}>
                  <td style={{ padding: '15px' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '1px solid #D4AF37'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder-product.jpg';
                      }}
                    />
                  </td>
                  <td style={{ padding: '15px', color: 'white', fontWeight: '500' }}>
                    {product.name}
                  </td>
                  <td style={{ padding: '15px', color: '#ccc' }}>
                    {product.category}
                  </td>
                  <td style={{ padding: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <span style={{ 
                        color: '#ccc', 
                        textDecoration: 'line-through',
                        fontSize: '0.9rem'
                      }}>
                        ¥ {product.originalPrice.toFixed(2)}
                      </span>
                      <span style={{ 
                        color: '#D4AF37', 
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        ¥ {product.salePrice.toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <button
                      onClick={() => handleReadMore(product.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: 'transparent',
                        color: '#D4AF37',
                        border: '2px solid #D4AF37',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#D4AF37';
                        e.currentTarget.style.color = 'black';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#D4AF37';
                      }}
                    >
                      Read more
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HandRollPage; 