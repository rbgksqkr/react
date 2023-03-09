import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilCartContent } from "@/recoil/cart/recoilCartState";

import CartContent from "./CartContent";
import CartResult from "./CartResult";


const Cart = () => {
  const [cartContents, setCartContents] = useRecoilState(recoilCartContent);
  const [resultData, setResultData] = useState({
    totalPrice: 0,
    totalDelivery: 0,
    totalPayPrice: 0,
  });

  const handleToggle = (id) => {
    setCartContents(
      cartContents.map((content) =>
        content.id === id ? { ...content, checked: !content.checked } : content
      )
    );
  };

  const handleRemove = (id) => {
    setCartContents(cartContents.filter((content) => content.id !== id));
  };

  const handleCountIncrease = (id) => {
    setCartContents(
      cartContents.map((content) =>
        content.id === id ? { ...content, count: content.count + 1 } : content
      )
    );
  };

  const handleCountDecrease = (id) => {
    setCartContents(
      cartContents.map((content) =>
        content.id === id
          ? content.count > 1
            ? { ...content, count: content.count - 1 }
            : content
          : content
      )
    );
  };

  const getTotalPayPrice = () => {
    const checkedcartContents = cartContents.filter(
      (content) => content.checked === true
    );
    let totalPrice = 0;
    let totalDelivery = 0;
    checkedcartContents.forEach((content) => {
      totalPrice += Number(content.price) * Number(content.count);
      totalDelivery += Number(content.delivery);
    });
    setResultData({
      totalPrice,
      totalDelivery,
      totalPayPrice: totalPrice + totalDelivery,
    });
  };

  useEffect(() => {
    getTotalPayPrice();
  }, [cartContents]);

  return (
    <div>
      <h1
        style={{
          marginLeft: "50px",
          fontFamily: "Lucida Console, Courier, monospace",
        }}
      >
        장바구니 목록
      </h1>
      <div style={{ display: "flex", gap: "300px" }}>
        <div>
          {cartContents &&
            cartContents.map((content) => (
              <CartContent
                key={content.id}
                content={content}
                handleToggle={handleToggle}
                handleRemove={handleRemove}
                handleCountIncrease={handleCountIncrease}
                handleCountDecrease={handleCountDecrease}
              />
            ))}
        </div>
        <div>{<CartResult resultData={resultData} />}</div>
      </div>
    </div>
  );
};

export default Cart;
