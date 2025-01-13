import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-foreground">
          Logo
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-foreground hover:text-gray-500">Home</a></li>
          <li><a href="#" className="text-foreground hover:text-gray-500">About</a></li>
          <li><a href="#" className="text-foreground hover:text-gray-500">Services</a></li>
          <li><a href="#" className="text-foreground hover:text-gray-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;