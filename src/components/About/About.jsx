import React from "react";
import "./About.css";
// import avocadoFarm from "../../assets/images/img114.jpg";
import BGAVO from "../../assets/images/bgAvo.jpeg";
import CUTE from '../../assets/images/Cute-Avocado.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const About = () => {

    useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالمللي ثانية
      once: true,     // يشتغل مرة واحدة بس
    });
  }, []);

  return (
    <section id="about" className="py-5  about text-success h-100 ">
      <div className="container mb-5 pb-5">
        {/* Section Heading */}
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold">Who we are?</h2>
          <p className="text-muted">Premium quality produce export since 2010</p>
        </div>

        <div className="row description align-items-center">
          {/* Text */}
          <div
            className="col-lg-8  mb-5 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p className="fs-5 fw-bold  mt-4 pt-2">
              At Avocado Restaurant, we believe that food is not just a meal, but a healthy and enjoyable lifestyle. That’s why we chose avocado as a symbol of freshness, flavor, and balance. Our goal is to offer you innovative and healthy dishes that combine exceptional taste with the finest fresh ingredients, creating a unique experience for you every day.
            </p>
            <p className="fs-6 fw-bold  mb-0">
              We prioritize sustainability, innovation, and strong partnerships, ensuring every product from farm to table meets the highest standards of quality and freshness.
            </p>
            <button className="about-btn fw-bold mt-4    ">Read More </button>
          </div>
          {/* Image */}
          <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">

            <div className=" rounded overflow-hidden">
               {/* <img src={CUTE} alt="Contact Us" className=" "  style={{  height: "px",
                  objectFit: "cover",
                  transition: "transform 0.7s",}}/> */}
              <img
                src={CUTE}
                alt="Avocado's farming facilities"
                className="img-fluid w-100"
                style={{
                  height: "px",
                  maxWidth: "300px",
                  objectFit: "cover",
                  transition: "transform 0.7s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>

        </div>
      </div>





    
    </section>
  );
};

export default About;
