import React from "react";
import Link from "next/link";
// import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./Cart";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">DUSE Shop</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="cart-item-qty">1</span>
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
