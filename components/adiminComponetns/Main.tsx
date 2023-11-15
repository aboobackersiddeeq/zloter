import Navbar from "@/components/adiminComponetns/Navbar";
import Sidebar from "@/components/adiminComponetns/Sidebar";
import React  from "react";

const AdminNav: React.FC = () => {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full">

      <Navbar />
  
      </div>
    </div>
  );
};

// Export the Admin component
export default AdminNav;