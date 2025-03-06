const ContactPage = () => {
    return (
      <div className=" w-[80%] mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">CONTACT <span className="text-black font-bold">US</span></h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Image Section */}
          <div className="w-full md:w-lg overflow-hidden">
            <img
              src="https://foreverbuy.in/assets/contact_img-CyOum2vk.png"
              alt="Office setup"
              className=""
            />
          </div>
          {/* Contact Details Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Our Store</h3>
            <p className="text-gray-600 mb-2">54709 Willms Station</p>
            <p className="text-gray-600 mb-2">Suite 350, Washington, USA</p>
            <p className="text-gray-600 mb-2">Tel: (415) 555-0132</p>
            <p className="text-gray-600 mb-4">Email: admin@forever.com</p>
  
            <h3 className="text-xl font-semibold mb-4">Careers at Forever</h3>
            <p className="text-gray-600 mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="px-6 py-4 border border-black  hover:bg-black hover:text-white transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  