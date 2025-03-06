// import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-5 ">
      <div className="w-[80%] mx-auto text-center md:text-left">
        {/* Top Section */}
        {/* <div className="flex flex-col md:flex-row justify-around items-center gap-8 pb-10 border-b">
          <div className="text-center">
            <div className="font-bold">Easy Exchange Policy</div>
            <p className="text-sm">We offer hassle-free exchange policy</p>
          </div>
          <div className="text-center">
            <div className="font-bold">7 Days Return Policy</div>
            <p className="text-sm">We provide 7 days free return policy</p>
          </div>
          <div className="text-center">
            <div className="font-bold">Best Customer Support</div>
            <p className="text-sm">We provide 24/7 customer support</p>
          </div>
        </div> */}

        {/* Subscription Section */}
        <div className="text-center py-10 ">
          <h2 className="text-3xl font-semibold mb-4">Subscribe now & get 20% off</h2>
          <p className="text-md text-gray-400 mb-4">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-3 w-1/2 focus:outline-none"
            />
            <button className="bg-black text-white px-5 py-2 ">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 py-10">
          <div className="w-1/2 text-center md:text-left">
            <h3 className="font-bold text-xl mb-5">BLU-GEMS.</h3>
            <p className="text-xs  text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex w-1/3 flex-col md:flex-row justify-between gap-8 text-gray-500 ">
            <div className="w-full">
              <h4 className="font-bold mb-5 text-xl text-gray-700">COMPANY</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full text-left text-gray-500">
              <h4 className="font-bold mb-5 text-xl  text-gray-700">GET IN TOUCH</h4>
              <p className="flex items-center justify-start  gap-2">
                <Phone size={16} /> +1-000-000-0000
              </p>
              <p className="flex items-center justify-start  gap-2">
                <Mail size={16} /> greatstackdev@gmail.com
              </p>
              <p className="flex items-center justify-start  gap-2">
                <Instagram size={16} /> Instagram
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-gray-700 mt-5 border-t border-gray-300 pt-5">
          Copyright 2024 &copy; greatstack.dev - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
