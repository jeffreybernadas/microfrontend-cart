import React, { useState, useEffect, useMemo } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@core/components/shadcn";
import { ICartItem } from "../types/cart.type";
import { IProduct } from "../types/product.type";

interface ProductCardProps {
  product: IProduct;
  handleAddToCart: (productId: string) => void;
  cartItems: ICartItem[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
  cartItems,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const currentQuantityInCart = useMemo(() => {
    const itemInCart = cartItems.find((item) => item.productId === product.id);
    return itemInCart ? itemInCart.quantity : 0;
  }, [cartItems, product.id]);

  const canAddToCart = currentQuantityInCart < product.availableQuantity;

  const handleButtonClick = () => {
    if (canAddToCart) {
      handleAddToCart(product.id);
      setIsAdded(true);
    }
  };

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const getButtonText = (): string => {
    if (isAdded) {
      return "Added!";
    }
    // Check if max stock reached in cart
    if (!canAddToCart && product.availableQuantity > 0) {
      return "Max in Cart";
    }
    if (product.availableQuantity > 0) {
      return "Add to Cart";
    }
    return "Out of Stock";
  };

  return (
    <Card key={product.id} className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription>${product.price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-contain mb-4"
        />
        <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
          {product.description}
        </p>
        <p className="text-xs text-gray-500">
          Stock: {product.availableQuantity}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleButtonClick}
          disabled={product.availableQuantity <= 0 || !canAddToCart || isAdded}
        >
          {getButtonText()}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
