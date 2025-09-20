import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light Avocado-inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
        {/* Floating Shapes with Avocado Colors */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-lime-200 rounded-full opacity-20 animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-200 rounded-full opacity-25 animate-bounce blur-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-lime-100 rounded-full opacity-30 animate-pulse delay-500 blur-xl"></div>
        
        {/* Subtle Avocado Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(132, 204, 22, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 50% 10%, rgba(163, 230, 53, 0.1) 0%, transparent 50%)`
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-gray-800 px-6 max-w-6xl mx-auto">
        {/* Light Animated Badge */}
        {/* <div className="max-w-[280px] content-center mx-auto mb-8">
          <div className="bg-white/80 mx-auto backdrop-blur-sm border border-lime-200/50 rounded-full px-6 py-3 shadow-lg shadow-green-100/50">
            <div className="flex items-center justify-center gap-2 text-green-700">
              <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                Fresh • Healthy • Natural
              </span>
            </div>
          </div>
        </div> */}

        {/* Light Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-gray-700 via-green-700 to-emerald-700 bg-clip-text text-transparent drop-shadow-sm">
            In the world of
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent font-extrabold py-2 drop-shadow-sm">
            avocados
          </span>
          <span className="block bg-gradient-to-r from-emerald-700 via-green-700 to-gray-700 bg-clip-text text-transparent drop-shadow-sm">
            health starts here.
          </span>
        </h1>

        {/* Light Subtitle */}
        <p className="text-xl md:text-2xl bg-gradient-to-r from-gray-600 to-green-600 bg-clip-text text-transparent font-medium max-w-4xl mx-auto mb-12 leading-relaxed">
          From avocado, we create for you a unique and healthy flavor experience every day.
        </p>

        {/* Light CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-3 rounded bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-green-200/50 min-w-[180px]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Shop Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="group relative px-8 py-3 rounded bg-white/90 backdrop-blur-sm border-2 border-green-300 hover:border-green-400 text-green-700 hover:text-green-800 font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-green-100/50 min-w-[180px]">
            <span className="flex items-center justify-center gap-2">
              Read More
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Light Features Icons */}
        {/* <div className="flex justify-center items-center gap-12 mt-16">
          {[
            { icon: "🥑", text: "Fresh", gradient: "from-lime-300 to-green-400", shadow: "shadow-lime-200/50" },
            { icon: "🌱", text: "Organic", gradient: "from-green-300 to-emerald-400", shadow: "shadow-green-200/50" },
            { icon: "💚", text: "Healthy", gradient: "from-emerald-300 to-lime-400", shadow: "shadow-emerald-200/50" }
          ].map((item, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 group-hover:border-green-300/70 transition-all duration-300 ${item.shadow} shadow-lg`}>
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>
              <p className={`mt-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-semibold text-lg group-hover:scale-105 transition-transform duration-300`}>
                {item.text}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Light Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-green-600/80">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-green-300/50 rounded-full flex justify-center bg-gradient-to-b from-white/50 to-green-50/50">
            <div className="w-1 h-3 bg-gradient-to-b from-lime-400 to-green-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Light Floating Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block">
        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float border border-lime-200/50 shadow-lg shadow-lime-100/50">
          <svg className="w-8 h-8 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-10 hidden lg:block">
        <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float delay-500 border border-green-200/50 shadow-lg shadow-green-100/50">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 hidden xl:block">
        <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-float delay-1000 border border-emerald-200/50 shadow-lg shadow-emerald-100/50">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        
        /* Light glassmorphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
        
        /* Soft shadows */
        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04);
        }
      `}</style>
    </div>
  );
};

export default Hero;