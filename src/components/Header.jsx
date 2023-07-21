import { useState } from "react";
import { RiCloseLine, RiHeart2Line, RiMenu2Line, RiShoppingCartLine } from "react-icons/ri";

export const Header = () => {
   const [showMenu, setShowMenu] = useState(false);

   return (
      <header className="text-gray-300 py-3 px-10 flex items-center justify-between bg-primary z-40">
         {/* Movile */}
         <button className="md:hidden text-2xl" onClick={() => setShowMenu(!showMenu)}>
            <RiMenu2Line />
         </button>
         <div
            className={`fixed ${
               showMenu ? "top-0" : "-top-full"
            } left-0 bg-secondary/20 backdrop-blur-3xl w-full h-full z-50 transition-all`}
         >
            <button className="text-3xl p-4 mt-4" onClick={() => setShowMenu(!showMenu)}>
               <RiCloseLine />
            </button>
            <ul className="flex flex-col items-center gap-4 mt-10">
               <li>
                  <a href="#" className="block font-bol text-2xl text-center p-4 text-primary ">
                     Home
                  </a>
               </li>
               <li>
                  <a href="#" className="block font-bol text-2xl text-center p-4 text-primary ">
                     Streams
                  </a>
               </li>
               <li>
                  <a href="#" className="block font-bol text-2xl text-center p-4 text-primary">
                     Game store
                  </a>
               </li>
               <li>
                  <a href="#" className="block font-bol text-2xl text-center p-4 text-primary ">
                     News
                  </a>
               </li>
            </ul>
         </div>
         {/* Menu */}
         <ul className="hidden md:flex items-center gap-8">
            <li>
               <a href="#" className="hover:text-[#e58d27] transition-colors">
                  Home
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-[#e58d27] transition-colors">
                  Streams
               </a>
            </li>
            <li>
               <a href="#" className="text-[#e58d27] transition-colors">
                  Game store
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-[#e58d27] transition-colors">
                  News
               </a>
            </li>
         </ul>
         {/* User Menu */}
         <ul className="flex items-center gap-6 text-xl">
            <li>
               <button className="hover:text-[#e58d27] transition-colors">
                  <RiShoppingCartLine />
               </button>
            </li>
            <li>
               <button className="hover:text-[#e58d27] transition-colors">
                  <RiHeart2Line />
               </button>
            </li>
            <li>
               <button className="hover:text-[#e58d27] transition-colors">
                  <img
                     src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg"
                     className="w-10 h-10 object-cover rounded-full ring-2 ring-secondary"
                  />
               </button>
            </li>
         </ul>
      </header>
   );
};
