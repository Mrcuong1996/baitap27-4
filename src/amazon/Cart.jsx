import React, { useState, useEffect } from "react";
import "../amazon/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [SoLuong, setSoLuong] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handleSoLuong();
  };

  const handleSoLuong = () => {
    let tinh = 0;
    cart.map((item) => (tinh += item.amount * item.SoLuong));
    setSoLuong(tinh);
  };

  useEffect(() => {
    handleSoLuong();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>{item.SoLuong}.VNĐ</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Giỏ Hàng Của Bạn</span>
        <span>Hóa Đơn: {SoLuong.toLocaleString()}.VNĐ</span>
      </div>
    </article>
  );
};

export default Cart;
