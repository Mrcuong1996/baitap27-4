import React, { useState } from "react";
import list from "../amazon/data";
import Cards from "../amazon/Card";
import "../amazon/Amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
