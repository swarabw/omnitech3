import React from 'react';
import './ProductCategories.css';

const ProductCategories = () => {
  const showAlert = (name) => {
    alert(`You clicked on ${name}`);
  };

  const categories = [
    {
      name: 'Cutting',
      img: 'https://media.istockphoto.com/id/184609027/photo/cutting-metal-with-plasma-laser.webp?a=1&b=1&s=612x612&w=0&k=20&c=fliOOK1SDJru7ErdQ5asMmQvlSJ2eizUf9CinCXvlaw=',
    },
    {
      name: 'Mounting',
      img: 'https://images.unsplash.com/photo-1691828715713-4f3eaf16f857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRpbmclMjBtYWNoaW5lJTIwb21uaXRlY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Grinding',
      img: 'https://img.freepik.com/free-photo/view-worker-grinding-piece-metal_268835-4092.jpg?ga=GA1.1.2027680793.1750071635&semt=ais_items_boosted&w=740',
    },
    {
      name: 'Polishing',
      img: 'https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278570.jpg?ga=GA1.1.2027680793.1750071635&semt=ais_items_boosted&w=740',
    },
    {
      name: 'Microscopes',
      img: 'https://img.freepik.com/free-photo/scientist-analyzes-bacterium-with-high-scale-magnification-generated-by-ai_188544-27928.jpg?ga=GA1.1.2027680793.1750071635&semt=ais_items_boosted&w=740',
    },
    {
      name: 'Hardness Tester',
      img: 'https://img.freepik.com/premium-photo/worker-uses-touch-control-panel-scene-skilled-worker-uses-electronic-control-panel-modern_1096515-29369.jpg?ga=GA1.1.2027680793.1750071635&semt=ais_items_boosted&w=740',
    },
  ];

  return (
    <div className="scroll-wrapper" role="region" aria-label="Product Categories">
      <section className="categories-section">
        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => showAlert(item.name)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="icon">
              <img src={item.img} alt={item.name} loading="lazy" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCategories;
