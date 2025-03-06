const HeroSection = () => {
    return (
      <section className="bg-white">
        <div className=" w-[80%] h-[70vh] mx-auto  flex flex-col md:flex-row items-center border border-gray-400">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-4 px-4 md:px-8">
            <h4 className="text-gray-600 uppercase tracking-widest">
              OUR BESTSELLERS
            </h4>
            <h1 className="text-5xl font-semibold">
              Latest <span className="text-pink-500">Arrivals</span>
            </h1>
            <p className="text-gray-500">
              Discover the latest trends in beauty. High-quality cosmetics curated for you.
            </p>
            <button className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600 transition-all">
              Shop Now
            </button>
          </div>
  
          {/* Right Side - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 w-full h-full">
            <img
              src="https://foreverbuy.in/assets/hero_img-DOCOb6wn.png"
              alt="Cosmetic Model"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;