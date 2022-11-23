import Link from "next/link";
import React from "react";

import { urlFor } from "../sanityConfig/clients"; // to access img from sanity

const TopBanner = ({ banner }) => {
  return (
    <div className="top-banner-container">
      <div>
        <p className="beats-solo">{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        <img src={urlFor(banner.image)} alt="" className="top-banner-image" />
        <div>
          <Link href={`/product/${banner.product}`}>
            <button type="button">{banner.buttonText}</button>
          </Link>
        </div>
        <div className="desc">
          <h5>Description</h5>
          <p>{banner.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
