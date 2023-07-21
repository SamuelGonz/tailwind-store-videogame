import { useState } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

import { Sidebar } from "./components/Sidebar";
import { Modal } from "./components/Modal";

const App = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [urlModal, setUrlModal] = useState("");

   const handleUrlModal = (url) => {
      setUrlModal(url);
      setIsModalOpen(true);
   };

   return (
      <>
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} url={urlModal} />
         <div className="h-screen flex flex-col">
            <Header />
            <div className="flex-1 overflow-y-auto flex">
               <Sidebar />
               <MainContent handleUrlModal={handleUrlModal} />
            </div>
         </div>
      </>
   );
};

export default App;
