import React from "react";
import  LOGO  from "../../assets/images/logo.png";
import "./footer.css";
import { MapPin, Mail, Globe } from "lucide-react";

const Footer = () => {

  return (

    <footer className="footer py-4">
      <div className="container">
        <div className="row ">
          <div className=" col-md-4">
            <div className="d-flex align-items-center gap-2">
              <img src={LOGO}  alt="logo" style={{ maxWidth: "50px", maxHeight: "40px" }} />
              <h3>Avocado</h3>
            </div>
            <p className="footer-description font-size-lg pt-3">From avocado, we create for you a unique and healthy flavor experience every day.</p>

        </div>

          <div className=" col-md-4">
            <div className="d-flex align-items-center gap-2">
              <h4>Contact Us</h4>
            </div>
<div className="my-links d-flex flex-column text-light">
   <a className="pt-3 text-decoration-none" style={{ color:"white" }}><Mail/>info@avocado.com</a>
            <a className="pt-3 text-decoration-none" style={{ color:"white" }}><Globe/>www.avocado.com</a>
            <a className="pt-3 text-decoration-none" style={{ color:"white" }}><MapPin/>Based in Egypt, serving the world</a>

</div>




        </div>
          <div className=" col-md-4">
            <div className="d-flex align-items-center gap-2">
              <h4>Explore </h4>
            </div>
            <div className="my-links d-flex flex-column text-light" style={{cursor:"pointer",color:"white"}}>
               <a className="pt-3 text-decoration-none" style={{ color:"white" }}>About Us </a>
            <a className="pt-3 text-decoration-none" style={{ color:"white" }}> contact</a>
            <a className="pt-3 text-decoration-none" style={{ color:"white" }}> menu</a>

            </div>
           
        </div>
        </div>
        <hr/>
        <div className="row">
          <p>© 2025 Avocado. All rights reserved.</p>
        </div>
        
    </div>
    </footer>
  );
};

export default Footer;
