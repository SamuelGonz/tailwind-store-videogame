import { Card } from "./Card";

// eslint-disable-next-line react/prop-types
export const MainContent = ({ handleUrlModal }) => {
   return (
      <main className="flex-1 overflow-y-auto flex flex-col pl-3 pr-6 pb-3 h-full">
         {/* Portada */}
         <div className="rounded-lg ">
            <img src="/portada.png" alt="Imagen portada" className="w-full h-96 object-cover object-top rounded-xl" />
         </div>
         {/* Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap gap-6 mt-3">
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
               handleUrlModal={handleUrlModal}
            />
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
            />
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
            />
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
            />
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
            />
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
            />
            <Card
               url="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
               title="Marvel Spider-Man"
               platform="PS5"
               price="51"
            />
         </div>
      </main>
   );
};
