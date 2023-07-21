import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export const InputPrice = () => {
   const [precio, setPrecio] = useState(10);
   const [mouseOnInput, setMouseOnInput] = useState(false);
   console.log("mouseOnInput: ", mouseOnInput);

   const subirPrecio = () => {
      setPrecio((price) => price + 1);
   };
   const bajarPrecio = () => {
      setPrecio((price) => {
         if (price === 0) return price;
         return price - 1;
      });
   };

   useEffect(() => {
      const modificarPrecio = (e) => {
         if (e.deltaY) return subirPrecio();
      };

      if (mouseOnInput) {
         window.addEventListener("wheel", modificarPrecio);
      }
      return () => window.removeEventListener("wheel", modificarPrecio);
   }, [mouseOnInput]);

   return (
      <div className="relative overflow-hidden">
         <RiMoneyDollarCircleLine className="absolute top-1/2 -translate-y-1/2 right-6" />
         <input
            type="number"
            className="bg-primary py-2 px-4 rounded-xl w-full outline-none appearance-none overflow-hidden text-center pr-6"
            value={precio}
            onChange={subirPrecio}
            onMouseLeave={() => setMouseOnInput(false)}
            onMouseEnter={() => setMouseOnInput(true)}
         />
         <button
            className="absolute top-1/2 -translate-y-1/2 right-0 h-full bg-secondary w-4 text-primary rounded-tr-xl rounded-br-xl"
            onClick={subirPrecio}
         >
            +
         </button>
         <button
            className="absolute top-1/2 -translate-y-1/2 left-0 h-full bg-secondary w-4 text-primary rounded-tl-xl rounded-bl-xl"
            onClick={bajarPrecio}
         >
            -
         </button>
      </div>
   );
};
