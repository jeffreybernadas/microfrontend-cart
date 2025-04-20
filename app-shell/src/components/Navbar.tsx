import React from "react";
import { Link } from "react-router";
import { Button } from "@core/components/shadcn";
import { useAppSelector } from "@state-management/rtk-hooks";
import type { RootState } from "@state-management/store";

const Navbar = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2">
          <p className="text-2xl font-bold">Core Shop</p>
        </Link>
        <div>
          <Button asChild variant="outline">
            <Link to="/order">Orders</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
