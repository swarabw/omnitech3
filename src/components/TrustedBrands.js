// src/components/TrustedBrands.js
import React, { useEffect } from 'react';
import './TrustedBrands.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrustedBrands = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="hero-bg" data-aos="fade-down"></div>

      <section className="partners" data-aos="fade-up">
        <h2>GLOBAL BRANDS THAT PLACE THEIR TRUST IN OUR EQUIPMENT AND SERVICES</h2>
        <p>
          We are proud of the strong partnerships that we have built with leading industrial brands, prestigious universities,
          and respected research establishments. They demand a supplier with global reach, world-class equipment, and in-depth
          knowledge that they can rely on.
        </p>

        <div className="marquee">
          <div className="marquee-track">
            {Array(2).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                <div className="brand"><img src="https://www.johncrane.com/media/t01ncbpm/logo-john-crane.svg" alt="John Crane" /></div>
                <div className="brand"><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Universit%C3%A4tsklinikum_M%C3%BCnster_Logo.svg" alt="University Münster" /></div>
                <div className="brand"><img src="https://brandlogos.net/wp-content/uploads/2022/04/honda_motor-logo-brandlogos.net_.png" alt="Honda" /></div>
                <div className="brand"><img src="https://cdn.iconscout.com/icon/free/png-256/free-siemens-logo-icon-285232.png" alt="Siemens" /></div>
                <div className="brand"><img src="https://cdn.freebiesupply.com/logos/large/2x/nissan-6-logo-svg-vector.svg" alt="Nissan" /></div>
                <div className="brand"><img src="https://logowik.com/content/uploads/images/yutaka1144.jpg" alt="Yutaka" /></div>
                <div className="brand"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logo_Hochformat_NUR_STAHLWERK.jpg/1200px-Logo_Hochformat_NUR_STAHLWERK.jpg" alt="Stahlwerke Haupt" /></div>
                <div className="brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IGZXfhnwUw9Qi5iCV5MtMNqLsqsTLeOt6Q&s" alt="Hyundai" /></div>
                <div className="brand"><img src="https://icon2.cleanpng.com/20180409/tzw/avb6y1nhb.webp" alt="Maruti Suzuki" /></div>
                <div className="brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T576-X_ai5e2tpMwV1ytdpQ0gC_4FzgtAQ&s" alt="Fiat" /></div>
                <div className="brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--Qq37h6dMGDUxFhzLYZPXsK2Wbi1ulD4cg&s" alt="Ford" /></div>
                <div className="brand"><img src="https://1000logos.net/wp-content/uploads/2020/06/Piaggio-Logo-1993.png" alt="Piaggio" /></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBrands;
