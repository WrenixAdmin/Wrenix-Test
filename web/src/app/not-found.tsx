import React from "react";
import Navbar from "@/components/layout/Navbar";

const NotFound: React.FC = () => {
  return (
    <div>
        <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-white font-ar-one-sans">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
