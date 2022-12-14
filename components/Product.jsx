import React from "react";
import Link from "next/link";
import { urlFor } from "../sanityConfig/clients";

const Product = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(product.image && product.image[0])}
            width={250}
            height={250}
            className="product-image"
            alt=""
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
