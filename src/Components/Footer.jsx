import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-base-content rounded p-4 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Logo Section */}
        <nav>
          <Image 
            src="/logo-xl.png" 
            alt="logo" 
            width={250} 
            height={250} 
            className="w-[200px] md:w-[300px] h-auto"
          />
        </nav>

        {/* Description */}
        <div className="max-w-md">
          <p className="text-white text-sm md:text-base opacity-90">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-white font-semibold text-lg">Social Links</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Image src="/facebook.png" alt="facebook" width={30} height={30} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Image src="/twitter.png" alt="twitter" width={30} height={30} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Image src="/instagram.png" alt="instagram" width={30} height={30} />
            </a>
          </nav>
        </div>

        {/* Bottom Section: Copyright and Links */}
        <hr className="w-full border-gray-600 my-2" />
        
        <aside className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
            <p className="hover:text-white cursor-pointer transition-colors">Cookies</p>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;