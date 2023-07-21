export const ItemListSidebar = ({ id, name }) => {
   return (
      <div className="flex items-center gap-2">
         <input type="checkbox" id={id} className="accent-secondary" />
         <label htmlFor={id}>{name}</label>
      </div>
   );
};
