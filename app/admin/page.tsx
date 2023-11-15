// Import necessary dependencies and components

import Navbar from "@/components/adiminComponetns/Navbar";
import Sidebar from "@/components/adiminComponetns/Sidebar";
import React, { useState } from "react";

const Admin: React.FC = () => {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <Navbar />
    </div>
  );
};

// Export the Admin component
export default Admin;
