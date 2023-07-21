// eslint-disable-next-line react/prop-types
export const Modal = ({ isOpen, url, onClose }) => {
   return (
      <div
         onClick={onClose}
         className={`absolute bg-slate-800/80 top-0 bottom-0 right-0 left-0 z-[100] flex items-center justify-center ${
            isOpen ? "block" : "hidden"
         }`}
      >
         <div className="bg-white overflow-hidden w-1/2 max-w-3xl max-h-4xl h-2/3">
            <img src={url} alt="imagen" className="w-full h-full object-center object-fill" />
         </div>
      </div>
   );
};
