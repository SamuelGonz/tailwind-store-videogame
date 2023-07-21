import { useState } from "react";
import {
   RiFacebookLine,
   RiFilter3Line,
   RiInstagramLine,
   RiMoneyDollarCircleLine,
   RiTwitterLine,
   RiYoutubeLine,
} from "react-icons/ri";
import { ItemListSidebar } from "./ItemListSidebar";

export const Sidebar = () => {
   const [showSidebar, setShowSidebar] = useState(false);
   return (
      <>
         <button
            className=" md:hidden block fixed bottom-4 right-4 z-[90] bg-secondary p-3 rounded-full text-lg"
            onClick={() => setShowSidebar(!showSidebar)}
         >
            <RiFilter3Line />
         </button>
         <div
            className={`w-full fixed md:static top-0 ${
               showSidebar ? "left-0" : "-left-full"
            }  bottom-0 md:w-72 overflow-y-auto h-full text-gray-400 md:px-4 md:pb-4 flex flex-col gap-3 bg-primary md:bg-transparent z-[80]`}
         >
            {/* Search Menu */}
            <div className="bg-bgSecondary rounded-lg p-4 flex-1">
               <h4 className="text-white mb-3">Categories</h4>
               <div className="flex flex-col gap-[5px]">
                  <ItemListSidebar id="indy" name="Indy" />
                  <ItemListSidebar id="adventure" name="Adventure" />
                  <ItemListSidebar id="mmo" name="MMO" />
                  <ItemListSidebar id="casual-game" name="Casual Game" />
                  <ItemListSidebar id="strategy" name="Strategy" />
                  <ItemListSidebar id="simulator" name="Simulator" />
                  <ItemListSidebar id="sport-game" name="Sport Game" />
                  <ItemListSidebar id="action-game" name="Action Game" />
               </div>

               <h4 className="mt-4 mb-3 text-white">Platforms</h4>
               <div className="flex flex-col gap-[5px]">
                  <ItemListSidebar id="pc" name="PC" />
                  <ItemListSidebar id="play-station-5" name="PlayStation 5" />
                  <ItemListSidebar id="play-station-5" name="PlayStation 5" />
                  <ItemListSidebar id="xbox-series" name="Xbox Series" />
                  <ItemListSidebar id="nintendo-switch" name="Nintendo Switch" />
               </div>

               <h4 className="mt-4 mb-2 text-white">Price</h4>
               <div className="flex gap-2 items-center justify-between">
                  <div className="relative">
                     <RiMoneyDollarCircleLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                     <input
                        type="number"
                        className="bg-primary py-2 px-4 rounded-xl w-full pl-8 outline-none appearance-none"
                     />
                  </div>

                  <div className="relative">
                     <RiMoneyDollarCircleLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                     <input type="number" className="bg-primary py-2 px-4 rounded-xl w-full pl-8 outline-none" />
                  </div>
               </div>
               <button className="mt-4 mx-auto block bg-secondary w-full text-primary font-bold text-sm rounded-full py-2 hover:-translate-y-1 transition-all">
                  Apply filter
               </button>
            </div>
            {/* Social Media */}
            <ul className="flex items-center justify-center gap-6 pb-4">
               <li>
                  <a href="#" className="text-2xl hover:text-blue-600 transition">
                     <RiFacebookLine className=" hover:scale-y-110 hover:scale-x-110 transition" />
                  </a>
               </li>
               <li>
                  <a href="#" className="text-2xl hover:text-red-600 transition">
                     <RiYoutubeLine />
                  </a>
               </li>
               <li>
                  <a href="#" className="text-2xl hover:text-white transition">
                     <RiInstagramLine />
                  </a>
               </li>
               <li>
                  <a href="#" className="text-2xl hover:text-blue-400 transition">
                     <RiTwitterLine />
                  </a>
               </li>
            </ul>
         </div>
      </>
   );
};
