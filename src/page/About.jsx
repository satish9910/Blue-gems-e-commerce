import { CheckCircle } from "lucide-react";

const About = () => {
    const features = [
        {
          title: "Exceptional Customer Service",
          description: "Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.",
        },
        {
          title: "Convenience",
          description: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
        },
        {
          title: "Quality Assurance",
          description: "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
        }
      ];
      
      
      
    return (
      <div className="w-[80%] mx-auto px-6 py-12">
        <h2 className="text-3xl text-pink-500 font-semibold text-center mb-8">About <span className="text-gray-600 font-semibold">US___</span></h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Image Section */}
          <div className="overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400870.jpg?t=st=1741178203~exp=1741181803~hmac=580bb9dc266ed5062827e4bb5962e3b396fa99880deed49d46d3ef43ddcda311&w=1380"
              alt="Artificial Jewelry"
              
            />
          </div>
          {/* About Content Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Forever was born from a passion for exquisite artificial jewelry, designed to complement every occasion. We aim to bring affordable luxury to jewelry lovers, offering intricate and stylish pieces that blend tradition with modern elegance.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Our Collection</h3>
            <p className="text-gray-600 mb-4">
              Our curated selection includes statement necklaces, delicate earrings, elegant bracelets, and stunning rings, crafted with precision and high-quality materials. We ensure that every piece radiates beauty, charm, and durability.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              At Forever, our mission is to redefine fashion jewelry by offering unique designs that inspire confidence and elegance. We believe that every accessory tells a story, and we strive to make yours shine.
            </p>
          </div>
        </div>
        <div>
        <h2 className="text-3xl text-pink-500 font-semibold mt-8 mb-8">Why Choose <span className="text-gray-600 font-semibold">US___</span></h2>
        <div className="grid md:grid-cols-3  p-6">
      {features.map((feature, index) => (
        <div key={index} className="p-4  border border-gray-200">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    );
  };
  
  export default About;
