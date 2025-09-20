import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";
import loginAnimation from '../assets/animation/avocado-workout.json';
import { useAuth } from "../context/AuthContext";import AOS from "aos";
import "aos/dist/aos.css";
import { GenerateToken } from "../../Apis/LoginApi";

const Login = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });


useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      login();
      setIsLoading(false);
    }, 1500);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  //Apis

    const inputRef = useRef([]);

  async function Login_Form() {
    let data = {
      username: inputRef.current["0"].value,
      password: inputRef.current["1"].value,
    };
  
    let res = await GenerateToken(data);
    console.log(res);
  
    localStorage.setItem("token", res);
  }

  const handleBoth = () => {
  Login_Form();
  handleLogin(); 
};

  return (
   <div className="min-vh-100 d-flex align-items-center signup-container">
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100 signup-background"></div>
      
      <div className="container position-relative signup-content"      data-aos="zoom-in"
                data-aos-delay="200">
        <div className="row justify-content-center">
          <div className="">
            <div className="card border-0 overflow-hidden signup-card">
              <div className="row g-0 h-100">
                {/* Form Section */}
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="p-2 p-md-5 w-100">
                    {/* Header */}
                    {/* <div className="text-center mb-4">
                      <div className="avocado-icon-container d-inline-flex align-items-center justify-content-center mb-3">
                        <span className="avocado-emoji">🥑</span>
                      </div>
                        <h2 className="fw-bold mb-2 login-title">Welcome Back</h2>
                      <p className="text-muted mb-0 login-subtitle">
                        Login to continue exploring our fresh avocado recipes
                      </p>
                    </div> */}

                
               {/* Login Form */}
                    <form onSubmit={handleLogin}>
                      {/* Email Field */}
                      <div className="mb-3">
                        <label className="form-label fw-semibold text-dark">Email Address</label>
                        <div className="position-relative">
                          <input
                            type="email"
                            ref={(e) => {inputRef.current["0"] = e}}
                            className="form-control py-3 ps-4 pe-5 login-input"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                          <div className="position-absolute top-50 end-0 translate-middle-y me-3 input-icon">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Password Field */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold text-dark">Password</label>
                        <div className="position-relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            ref={(e) => {inputRef.current["1"] = e}}
                            className="form-control py-3 ps-4 pe-5 login-input"
                            placeholder="Enter your password"
                            required
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                          />
                          <button
                            type="button"
                            className="position-absolute top-50 end-0 translate-middle-y me-3 border-0 bg-transparent password-toggle"
                            onClick={togglePassword}
                          >
                            {showPassword ? (
                              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                              </svg>
                            ) : (
                              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Remember & Forgot */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input className="form-check-input custom-checkbox" type="checkbox" id="remember" />
                          <label className="form-check-label text-muted" htmlFor="remember">
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="text-decoration-none forgot-link">
                          Forgot password?
                        </a>
                      </div>

                      {/* Login Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        onClick={()=>{handleBoth()}}
                        className="btn w-100 py-3 fw-bold position-relative overflow-hidden login-btn"
                      >
                        {isLoading ? (
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="spinner-border spinner-border-sm me-2 loading-spinner"></div>
                            Logning in...
                          </div>
                        ) : (
                          'Log In'
                        )}
                      </button>

                      {/* Divider */}
                      <div className="position-relative my-4">
                        <hr className="text-muted" />
                        <span className="position-absolute top-50 start-50 translate-middle bg-light px-3 text-muted divider-text">
                          or continue with
                        </span>
                      </div>

                      {/* Social Signup */}
                      <div className="row g-3 mb-1">
                        <div className="col-6">
                          <button type="button" className="btn w-100 py-2 border d-flex align-items-center justify-content-center social-btn">
                            <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                          </button>
                        </div>
                        <div className="col-6">
                          <button type="button" className="btn w-100 py-2 border d-flex align-items-center justify-content-center social-btn">
                            <svg className="me-2" width="20" height="20" fill="#1877f2" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </button>
                        </div>
                      </div>

                      {/* Sign Up Link */}
                      <p className="text-center mb-0 text-muted">
                        Don't have an account?{" "}
                        <a href="/signup" className="fw-semibold text-decoration-none signup-link">
                          Sign up for free
                        </a>
                      </p>
                    </form>
                  </div>
                </div>

                {/* Animation Section */}
                <div 
                  className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center position-relative animation-section"
                >
                  {/* Background Pattern */}
                  <div className="position-absolute w-100 h-100 opacity-10 animation-pattern"></div>
                  
                  {/* Content */}
                  <div className="text-center position-relative">
                    <div className="mb-4">
                      <Lottie 
                        animationData={loginAnimation} 
                        loop={true} 
                        className="lottie-animation w-100"
                      />
                    </div>
                    <h3 className="text-white fw-bold mb-3">
                      Welcome Back
                    </h3>
                    <p className="text-white opacity-75 mb-0 px-4">
                      Login to continue exploring our fresh avocado recipes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signup-container {
  background: linear-gradient(135deg, #f8fffe 0%, #ecfdf5 50%, #f0fdf4 100%);
        }

        .signup-background {
          background-image: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .signup-content {
          z-index: 2;
        }

        .signup-card {
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }

        .avocado-icon-container {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
        }

        .avocado-emoji {
          font-size: 24px;
        }

        .signup-title {
          color: #064e3b;
        }

        .signup-subtitle {
          color: #6b7280;
        }

        .signup-input {
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .signup-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .input-icon {
          color: #10b981;
        }

        .password-toggle {
          color: #6b7280;
        }

        .custom-checkbox:checked {
          background-color: #10b981;
          border-color: #10b981;
        }

        .terms-link {
          color: #10b981;
        }

        .signup-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .signup-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .loading-spinner {
          width: 1rem;
          height: 1rem;
        }

        .divider-text {
          font-size: 0.9rem;
        }

        .social-btn {
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background-color: #f9fafb;
        }

        .login-link {
          color: #10b981;
        }

        .animation-section {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          overflow: hidden;
        }

        .animation-pattern {
          background-image: radial-gradient(circle at 30% 30%, white 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, white 0%, transparent 50%);
        }

        .lottie-animation {
          width: 300px;
          height: 300px;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
        }

        @media (max-width: 768px) {
          .signup-card {
            margin: 1rem;
            border-radius: 20px;
          }
          
          .lottie-animation {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;