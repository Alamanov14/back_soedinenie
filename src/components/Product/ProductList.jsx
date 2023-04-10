import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Produc</div>;
};

export default ProductList;
