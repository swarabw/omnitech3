import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../style/Products.css";
import ExperienceSection from "./ExperienceSection";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const products = [
    {
      id: 1,
      title: "Cut-Off Machines",
      description:
        "Omnitech cut-off machines offer powerful benchtop and floor-standing models for precise sectioning. Ideal for metallographic sample preparation, they support high-speed cutting with minimal deformation. Rugged design ensures long-term durability. Safety shields and coolant systems protect the operator. User-friendly controls make setup easy. Designed for both industrial and lab use.",
      img: "https://www.shutterstock.com/image-photo/worker-cut-steel-off-wheel-600nw-2057277344.jpg",
      delay: 0,
    },
    {
      id: 2,
      title: "Mounting Equipment",
      description:
        "Omnitech’s mounting presses ensure stable sample embedding. Available in hot and UV variants. Easy mold handling and adjustable temperature & pressure settings. Built for high throughput environments. Compatible with a variety of resins and sample sizes. Compact, durable body suitable for modern labs.",
      img: "https://media.gettyimages.com/id/510162486/photo/production-line-of-plastic-industry.jpg?s=612x612&w=gi&k=20&c=XzPK17hdKEkMWGa7dOHHHbS-MMhMfbNUrgUI-PmbwRk=",
      delay: 100,
    },
    {
      id: 3,
      title: "Grinders & Polishers",
      description:
        "Our grinder-polisher units provide excellent surface finishing with variable speed control. Supports manual and automated operations. Durable stainless steel construction for industrial usage. Comes with magnetic disc system for fast media changes. Ensures scratch-free results every time. Ergonomically designed for operator comfort.",
      img: "https://5.imimg.com/data5/KX/BS/MY-2398714/grinder-cum-polisher-500x500.jpg",
      delay: 200,
    },
    {
      id: 4,
      title: "Consumables",
      description:
        "Omnitech offers high-quality abrasives, polishing cloths, and diamond suspensions. All materials tested for consistent results. Available in various grit sizes and formats. Backed by our in-house quality certification. Improve surface clarity and uniformity. Packaged for easy storage and handling.",
      img: "https://padia.org/wp-content/uploads/2023/10/Industrial-Consumables-Sales.jpg",
      delay: 300,
    },
    {
      id: 5,
      title: "Hardness Testers",
      description:
        "Our machines support Rockwell, Vickers, Knoop, and Brinell testing methods. High-resolution load control and automatic indentation detection. User-friendly touchscreen interface with built-in report generation. Suitable for metals, ceramics, and composites. Precision-aligned stage for accurate results. Ideal for R&D and QA departments.",
      img: "https://struers-web-production-17090b-cd-us.azurewebsites.net/-/media/Struers-media-library/Products/Hardness-testing/Hardness-testing-accessories/HAT-accessories.png?h=500&w=1600&lm=20241023T043633Z&hash=9EE64DD8388C1BB743699E7A44E2FA2B",
      delay: 400,
    },
    {
      id: 6,
      title: "Optical Analyzer",
      description:
        "Inverse macroscopes from Omnitech deliver high-res imaging for welds and surface structures. Fast scanning and digital zoom capabilities. Comes with software for automated image measurement. USB and HDMI outputs for easy integration. Compact build saves lab space. Delivers clarity even at low magnification levels.",
      img: "https://cdn.tmi.yokogawa.com/1/9182/files/AQ6380_Optical_Spectrum_Analyzer_Yokogawa_Test_Measurement.png",
      delay: 500,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Sticky Header */}
      <div className="sticky-header">
        <h1>Omnitech Machines</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="grid-container">
        {filteredProducts.map((product) => (
          <div
            className="card"
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={product.delay}
          >
            <img src={product.img} alt={product.title} />
            <div className="card-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <button>To the product range</button>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <ExperienceSection />
    </div>
  );
};

export default ProductsPage;
