import { Row, Col } from "react-bootstrap";
import CategoryItem from "../components/CategoryItem";
import { useParams } from "react-router-dom";
import categoriesData from '../data/categoriesData.json'

const CategoryPage = () => {
    const { id } = useParams(); 
  const categoryId = parseInt(id, 10);

  // فلترة الكاتيجوري
  const category = categoriesData.find(cat => cat.id === categoryId);

  if (!category) {
    return <h2>Category not found</h2>;
  }

  return (
    <div className="my-5 pt-5 guacamole-page">
      {/* Header Section */}
      <div className="container d-flex flex-wrap justify-content-between align-items-center mt-5 header-section">
        <div className="w-50 p-3 content-section">
          <h1 className="fw-bold text-success mb-4 page-title">{category.body.title}</h1>
          <p className="text-muted mb-4 page-description">
          { category.body.desc}
          </p>  
          
          <button className="btn btn-outline-success learn-more-btn">Learn More</button>
        </div>
        <div className="w-50 d-flex justify-content-center  p-3 image-section">
          <img src={category.body.img} alt="Guacamole" className="img-fluid hero-image" />
        </div>
      </div>

      <Row lg={3} md={2} sm={1} className="g-3 container mt-3 me-auto ms-auto recipes-grid">


          {category.recipes.map(recipe => (
          
            <Col key={recipe.id}>
            <CategoryItem {...recipe} />
          </Col>
        ))}
      </Row>


      

      <style jsx>{`
        .guacamole-page {
          background: linear-gradient(135deg, #f8fffe 0%, #ecfdf5 50%, #f0fdf4 100%);
          min-height: 100vh;
          position: relative;
        }

        .guacamole-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .header-section {
          position: relative;
          z-index: 2;
          background: white;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.1);
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #10b981, #059669, #047857);
          z-index: 1;
        }

        .content-section {
          animation: slideInLeft 0.8s ease-out;
        }

        .image-section {
          animation: slideInRight 0.8s ease-out;
        }

        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #064e3b !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: relative;
          margin-bottom: 1.5rem !important;
        }

        .page-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #10b981, #059669);
          border-radius: 2px;
        }

        .page-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #6b7280 !important;
          font-weight: 500;
          margin-bottom: 2rem !important;
        }

        .learn-more-btn {
          background: transparent !important;
          border: 2px solid #10b981 !important;
          color: #10b981 !important;
          font-weight: 700 !important;
          padding: 0.8rem 2rem !important;
          border-radius: 12px !important;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .learn-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #10b981, #059669);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .learn-more-btn:hover::before {
          left: 0;
        }

        .learn-more-btn:hover {
          color: white !important;
          border-color: #10b981 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        }

        .hero-image {
          border-radius: 20px;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
          max-width: 400px;
        }

        .hero-image:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .recipes-grid {
          position: relative;
          z-index: 2;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .recipes-grid .col {
          animation: fadeInUp 0.6s ease-out;
        }

        .recipes-grid .col:nth-child(1) { animation-delay: 0.1s; }
        .recipes-grid .col:nth-child(2) { animation-delay: 0.2s; }
        .recipes-grid .col:nth-child(3) { animation-delay: 0.3s; }
        .recipes-grid .col:nth-child(4) { animation-delay: 0.4s; }
        .recipes-grid .col:nth-child(5) { animation-delay: 0.5s; }
        .recipes-grid .col:nth-child(6) { animation-delay: 0.6s; }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-section .w-50 {
            width: 100% !important;
          }
          
          .content-section {
            text-align: center;
            order: 2;
          }
          
          .image-section {
            order: 1;
            margin-bottom: 1rem;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .page-description {
            font-size: 1rem;
          }
          
          .hero-image {
            max-width: 300px;
          }
          
          .header-section {
            margin: 0 1rem 2rem 1rem;
            padding: 1rem;
          }
        }

        @media (max-width: 576px) {
          .header-section {
            border-radius: 20px;
          }
          
          .page-title {
            font-size: 1.8rem;
          }
          
          .learn-more-btn {
            padding: 0.7rem 1.5rem !important;
            font-size: 0.9rem;
          }
          
          .hero-image {
            max-width: 250px;
          }
        }

        /* Additional hover effects */
        .header-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
        }

        /* Grid enhancement */
        .recipes-grid::before {
          content: '';
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #10b981, #059669);
          border-radius: 2px;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default CategoryPage;