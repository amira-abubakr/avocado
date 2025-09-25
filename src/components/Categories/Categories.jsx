
import React from "react";

import Guacamole from "../../../public/Guacamole/guacamole-1.png";
import Burgers from "../../../public/burger/burger.png";
import Tacos from "../../../public/Taco&Burrito/tacos.png";
import Salads from "../../../public/Salad&Bowl/salads.png";
import AvocadoToast from "../../../public/Avocado Toast/avocado-toast-1.png";
import HeartHealthy from "../../assets/images/aha.svg";
import Sauces from "../../../public/Avocado Sauces/sauce.png";
import {Link}  from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './Categories.css'

const Categories = () => {

      useEffect(() => {
      AOS.init({
        duration: 1000, // مدة الأنيميشن بالمللي ثانية
        once: true,     // يشتغل مرة واحدة بس
      });
    }, []);
  //  const categories = [
  //   { name: "Guacamole", img: Guacamole, link: "/guacamole" },
  //   { name: "Burgers & Sandwiches", img: Burgers, link: "/burgers" },
  //   { name: "Tacos & Burritos", img: Tacos, link: "/tacos" },
  //   { name: "Salads & Bowls", img: Salads, link: "/salads" },
  //   { name: "Avocado Toast", img: AvocadoToast, link: "/avocado-toast" },
  //   { name: "Heart Healthy", img: HeartHealthy, link: "/heart-healthy" },
  //   { name: "Sauces & Spreads", img: Sauces, link: "/sauces" },
  // ];


    const categories = [
    { name: "Guacamole", img: Guacamole, id :1 },
    { name: "Burgers & Sandwiches", img: Burgers,  id :2},
    { name: "Tacos & Burritos", img: Tacos,  id :3},
    { name: "Salads & Bowls", img: Salads, id :4 },
    { name: "Avocado Toast", img: AvocadoToast, id :5},
    { name: "Heart Healthy", img: HeartHealthy,id :6 },
    { name: "Sauces & Spreads", img: Sauces,  id :7},
  ];

  return (
 <section id="categories" className="py-5">
      <div className="container-fluid cat">
        <div className="title text-center mb-5">
          <h2 className="fw-bold text-success">Our Recipes</h2>
          <p className="text-muted">
            Start your journey with avocado recipes by choosing the type that suits you.
          </p>
        </div>

       <div
  className="content w-100 p-4 rounded shadow mb-4"
>
  <div className="cat-grid d-flex justify-content-center gap-3 flex-nowrap overflow-auto">
    {categories.map((cat) => (
      <Link
      key={cat.id} 
       to={`/category/${cat.id}`}
        className="card-style bg-white rounded border border-success text-center p-3 shadow-sm text-decoration-none"
        style={{ 
          minWidth: "150px" // علشان كل بوكس يبقى ثابت العرض
        }}
      >
        <img
          src={cat.img}
          alt={cat.name}
          className="img-fluid mb-2 mx-auto"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.1)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
        <h6 className="fw-bold text-success">{cat.name}</h6>
      </Link>
    ))}
  </div>

  <div
    className="container justify-content-center text-center mt-5 pt-5 mb-5"
    data-aos="fade-right"
  >
    <h2 className="fw-bold" style={{ color: "#094b36ff" }}> Pick a starting point and leave the rest-ipe to us.</h2>
    
  </div>
</div>

      
      </div>

     
    </section>

  );
};

export default Categories;
