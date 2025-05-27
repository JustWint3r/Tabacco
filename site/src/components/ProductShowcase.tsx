import React from 'react';

// Mock product data
const products = [
  {
    id: 1,
    name: '手卷烟草',
    description: '优质手卷烟草，多种口味可选',
    price: '¥199.00',
    image: 'https://via.placeholder.com/300x200?text=Hand+Roll+Tobacco'
  },
  {
    id: 2,
    name: '斗丝',
    description: '精选斗丝，香气浓郁',
    price: '¥159.00',
    image: 'https://via.placeholder.com/300x200?text=Pipe+Tobacco'
  },
  {
    id: 3,
    name: '烟斗',
    description: '手工制作烟斗，经典设计',
    price: '¥299.00',
    image: 'https://via.placeholder.com/300x200?text=Tobacco+Pipe'
  },
  {
    id: 4,
    name: '雪茄',
    description: '进口雪茄，品质保证',
    price: '¥499.00',
    image: 'https://via.placeholder.com/300x200?text=Cigars'
  },
  {
    id: 5,
    name: '卷烟纸',
    description: '优质卷烟纸，轻薄透气',
    price: '¥29.00',
    image: 'https://via.placeholder.com/300x200?text=Rolling+Papers'
  },
  {
    id: 6,
    name: '成品烟',
    description: '精选成品烟，多种品牌',
    price: '¥129.00',
    image: 'https://via.placeholder.com/300x200?text=Cigarettes'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="my-12">
      <h2 className="section-title">产品展示</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">{product.price}</div>
              <button className="btn w-full mt-4">立即选购</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
