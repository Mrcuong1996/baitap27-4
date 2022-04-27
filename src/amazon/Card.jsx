import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, Gia, SoLuong, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Giá: {Gia.toLocaleString()}VNĐ</p>
        <p>Tồn Kho: {SoLuong.toLocaleString()} </p>
        <button onClick={() => handleClick(item)}>Thêm Vào Giỏ Hàng</button>
      </div>
    </div>
  );
};

export default Cards;
