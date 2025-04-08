import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-[1500px] items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <p className="text-2xl font-bold">Core Shop</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
