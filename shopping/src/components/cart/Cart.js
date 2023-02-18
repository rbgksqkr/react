import { useState } from "react";
import CartContent from "./CartContent";
import CartResult from "./CartResult";

const Cart = () => {
  const [cartContent, setCartContent] = useState([
    {
      id: 1,
      name: "일렉트로룩스 a 유선 청소기",
      price: "491,470원",
      src: `${process.env.PUBLIC_URL}/images/4.jpg`,
      checked: false,
    },
    {
      id: 2,
      name: "두피케어 샴푸",
      price: "11,340원",
      src: `${process.env.PUBLIC_URL}/images/1.jpg`,
      checked: false,
    },
  ]);

  const handleToggle = (id) => {
    setCartContent(
      cartContent.map((content) =>
        content.id === id ? { ...content, checked: !content.checked } : content
      )
    );
  };

  return (
    <div>
      <h1>장바구니</h1>
      <div style={{ display: "flex", gap: "300px" }}>
        <div>
          {cartContent &&
            cartContent.map((content) => (
              <CartContent
                key={content.id}
                content={content}
                handleToggle={handleToggle}
              />
            ))}
        </div>
        <div>{<CartResult />}</div>
      </div>
    </div>
  );
};

export default Cart;
