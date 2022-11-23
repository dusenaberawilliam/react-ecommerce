import React from "react";
import { BottomBanner, Product, TopBanner } from "../components/index";

import { client } from "../sanityConfig/clients";

const Home = ({ products, banners }) => (
  <>
    <TopBanner banner={banners.length && banners[0]} />
    <div className="products-heading">
      <h2>Beset Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>

    <BottomBanner banner={banners.length && banners[0]} />
  </>
);

export const getServerSideProps = async () => {
  const queryProduct = '*[_type == "product"]';
  const products = await client.fetch(queryProduct);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};

export default Home;
