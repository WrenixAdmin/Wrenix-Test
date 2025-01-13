import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background p-4">
      <div className="container mx-auto text-center text-foreground">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="text-foreground hover:text-gray-500">Privacy Policy</a></li>
          <li><a href="#" className="text-foreground hover:text-gray-500">Terms of Service</a></li>
          <li><a href="#" className="text-foreground hover:text-gray-500">Contact</a></li>
          <li><a href="#" className="text-foreground hover:text-gray-500">Social Media</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;