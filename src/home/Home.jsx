import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";

function Home(props) {
  // function addToCart(btn) {
  //   document.querySelector;
  // }

  return (
    <div>
      <Link to="./header"></Link>
      <h1>home</h1>
      <Link to="./ShoppingCart">
        <button>Shopping Cart</button>
      </Link>
    </div>
  );
}

export default Home;
