// eslint-disable-next-line react/prop-types
export const Card = ({ url, title, platform, price, handleUrlModal }) => {
   return (
      <div className="bg-bgSecondary p-6 rounded-xl flex flex-col gap-2">
         <img
            src={url}
            alt="Imagen spiderman"
            className="w-full h-48 object-cover rounded-xl"
            onClick={() => handleUrlModal(url)}
         />
         <h4 className="text-lg text-white">{title}</h4>
         <span className="text-gray-500 text-xs">{platform}</span>
         <div className="flex items-center gap-4">
            <h5 className="text-2xl text-secondary">${price}</h5>
            <button className="mx-auto block bg-secondary w-full text-primary font-bold text-sm rounded-full py-2">
               Buy
            </button>
         </div>
      </div>
   );
};
