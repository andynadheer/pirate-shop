import React, { FC } from "react";
import Box from "@mui/material/Box";
import Product from "./components/Product";

import "./Products.scss";

const Products: FC<Props> = (_: Props) => {
  return (
    <Box className="products-block">
      <Product />
      <Product />
      <Product />
    </Box>
  );
};

export interface Props {}

export default Products;
