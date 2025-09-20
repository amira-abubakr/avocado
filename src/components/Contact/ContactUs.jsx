import React from "react";
import './ContactUs.css'


const ContactUs = () => {
  return (
    <div>
      <section
        id="contact"
        className="py-5"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-success">Contact Us</h2>
            <p className="text-muted">Do you have any questions or are you interested in our Recipes? Feel free to reach out to us.</p>
          </div>

          {/* Contact Form */}
          <div className="row align-items-center g-5">
            <div className="col-md-12">
              <div
                className="card shadow border-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="card-body p-4">
                  <h3 className="mb-4 text-center text-success">
                    Send a Message
                  </h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Type your message..."
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                      Send
                      {/* {isSubmitting ? "Sending..." : "Send Message"} */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4  d-none d-md-block" >
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
