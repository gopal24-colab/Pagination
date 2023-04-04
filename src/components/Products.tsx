import axios from "axios";
import React, { useEffect } from "react";
const url = "https://dummyjson.com/products";

const Products = () => {
  const fetchProducts = async () => {
    const res = await fetch(url);
    console.log(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>Products</div>;
};

export default Products;
