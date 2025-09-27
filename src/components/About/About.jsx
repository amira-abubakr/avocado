import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5 mt-5 section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">Who we are?</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">Premium quality produce export since 2010</p>
        </div>

        <div className="row align-items-center">
          {/* Text Content */}
          <div
            className="col-lg-7 mb-5 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="content-wrapper">
              <p className="main-description">
                At <span className="brand-highlight">Avocado Restaurant</span>, we believe that food is not just a meal, but a healthy and enjoyable lifestyle. That's why we chose avocado as a symbol of freshness, flavor, and balance. Our goal is to offer you innovative and healthy dishes that combine exceptional taste with the finest fresh ingredients, creating a unique experience for you every day.
              </p>
              
              <p className="sub-description">
                We prioritize sustainability, innovation, and strong partnerships, ensuring every product from farm to table meets the highest standards of quality and freshness.
              </p>

              {/* Features Grid */}
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">🌱</div>
                  <div className="feature-text">
                    <h6>Sustainable</h6>
                    <span>Eco-friendly practices</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✨</div>
                  <div className="feature-text">
                    <h6>Innovation</h6>
                    <span>Creative solutions</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-text">
                    <h6>Partnership</h6>
                    <span>Strong relationships</span>
                  </div>
                </div>
              </div>

              <button className="cta-button">
                <span>Read More</span>
                <svg className="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual Section - Multiple Options */}
          <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">
            
            {/* Option 1: Stats Cards with Visual Elements */}
            <div className="visual-container stats-visual">
              <div className="stats-card primary-card">
                <div className="card-icon">🥑</div>
                <div className="card-content">
                  <h3>15+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              
              <div className="stats-card secondary-card">
                <div className="card-icon">🌍</div>
                <div className="card-content">
                  <h3>50+</h3>
                  <p>Countries Served</p>
                </div>
              </div>
              
              <div className="stats-card tertiary-card">
                <div className="card-icon">👥</div>
                <div className="card-content">
                  <h3>10K+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
              
              <div className="stats-card quaternary-card">
                <div className="card-icon">⭐</div>
                <div className="card-content">
                  <h3>99%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="floating-element element-1">🌿</div>
              <div className="floating-element element-2">🍃</div>
              <div className="floating-element element-3">💚</div>
            </div>

            {/* Alternative Option 2: Illustration/Graphic (commented out for now) */}
            {/* 
            <div className="visual-container illustration-visual">
              <div className="avocado-illustration">
                <div className="avocado-shape">
                  <div className="avocado-pit"></div>
                </div>
                <div className="growth-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
            </div>
            */}

          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, #f8fffe 0%, #ecfdf5 50%, #f0fdf4 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.03) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.03) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        /* Section Header */
        .section-header {
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: #064e3b;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .title-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #10b981, #059669);
          border-radius: 2px;
          margin: 0 auto 1.5rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #6b7280;
          font-weight: 500;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Content */
        .content-wrapper {
          max-width: 100%;
        }

        .main-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #374151;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .brand-highlight {
          color: #059669;
          font-weight: 700;
        }

        .sub-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.1);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.15);
        }

        .feature-icon {
          font-size: 2rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .feature-text h6 {
          margin: 0;
          color: #374151;
          font-weight: 700;
          font-size: 1rem;
        }

        .feature-text span {
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* CTA Button */
        .cta-button {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          color: white;
          padding: 1rem 2rem;
          border-radius: 15px;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
          cursor: pointer;
          margin-top: 2rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .button-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(4px);
        }

        /* Visual Container */
        .visual-container {
          position: relative;
          height: 400px;
        }

        /* Stats Visual */
        .stats-visual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          position: relative;
        }

        .stats-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
          border-radius: 20px 20px 0 0;
        }

        .primary-card { --card-gradient: linear-gradient(90deg, #10b981, #34d399); }
        .secondary-card { --card-gradient: linear-gradient(90deg, #059669, #10b981); }
        .tertiary-card { --card-gradient: linear-gradient(90deg, #047857, #059669); }
        .quaternary-card { --card-gradient: linear-gradient(90deg, #065f46, #047857); }

        .stats-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.15);
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
        }

        .card-content h3 {
          font-size: 2rem;
          font-weight: 800;
          color: #059669;
          margin: 0;
          line-height: 1;
        }

        .card-content p {
          color: #6b7280;
          font-weight: 500;
          font-size: 0.9rem;
          margin: 0.5rem 0 0 0;
          line-height: 1.3;
        }

        /* Floating Elements */
        .floating-element {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.6;
          animation: float 3s ease-in-out infinite;
          z-index: 1;
        }

        .element-1 {
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          bottom: 20%;
          left: 10%;
          animation-delay: 1s;
        }

        .element-3 {
          top: 50%;
          right: 5%;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-visual {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          
          .visual-container {
            height: auto;
          }
          
          .stats-card {
            padding: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;