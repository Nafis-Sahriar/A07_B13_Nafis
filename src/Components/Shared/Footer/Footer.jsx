import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
              <footer className="bg-[#244D3F] text-white mt-10">

      
            <div className="w-[90%] mx-auto py-12 flex flex-col items-center text-center gap-6">

      
        <h1 className="text-4xl md:text-6xl font-bold">KeenKeeper</h1>

       
        <p className="text-sm md:text-base text-gray-200 max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-lg">Social Links</p>

          <div className="flex gap-4">
          <span className="w-10 h-10 rounded-full bg-white flex items-center hover:cursor-pointer justify-center text-black"><FaInstagram /></span>
            <span className="w-10 h-10 rounded-full bg-white flex items-center hover:cursor-pointer justify-center text-black"><FaFacebookSquare /></span>
        <span className="w-10 h-10 rounded-full bg-white flex items-center hover:cursor-pointer justify-center text-black"><BsTwitterX /></span>
          </div>



        </div>

    
        <div className="w-full border-t border-white/20 mt-6"></div>

       
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">

      
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          

          <div className="flex gap-6">

            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>

          </div>

        </div>

      </div>
    </footer>
    );
};

export default Footer;