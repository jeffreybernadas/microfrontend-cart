import React from "react";
import { useTheme, ThemeProvider } from "@core/themes/shadcn";
import { Button } from "@core/components/shadcn";
import { cn } from "@core/lib";
import { useIsMobile, useInterval, useFullscreen } from "@core/hooks";
import { useAppSelector, useAppDispatch } from "@state-management/rtk-hooks";
import { decrementProductQuantity } from "@state-management/product-slice";
import type { RootState } from "@state-management/store";

const Main = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: RootState) => state.products);

  console.log(products);

  return (
    <div>
      <h1>Main</h1>
      <Button onClick={() => dispatch(decrementProductQuantity("1"))}>
        Test
      </Button>
    </div>
  );
};

export default Main;
