import { useEffect, useState } from "react";
import CartContent from "./CartContent";
import CartResult from "./CartResult";

const Cart = () => {
  const [cartContent, setCartContent] = useState([
    {
      id: 1,
      name: "일렉트로룩스 a 유선 청소기",
      price: 91470,
      src: `${process.env.PUBLIC_URL}/images/4.jpg`,
      delivery: 2500,
      checked: false,
    },
    {
      id: 2,
      name: "두피케어 샴푸",
      price: 11340,
      src: `${process.env.PUBLIC_URL}/images/1.jpg`,
      delivery: 0,
      checked: false,
    },
  ]);
  const [resultData, setResultData] = useState({
    totalPrice: 0,
    totalDelivery: 0,
    totalPayPrice: 0,
  });

  const handleToggle = (id) => {
    setCartContent(
      cartContent.map((content) =>
        content.id === id ? { ...content, checked: !content.checked } : content
      )
    );
  };

  const handleRemove = (id) => {
    setCartContent(cartContent.filter((content) => content.id !== id));
  };

  const getTotalPayPrice = () => {
    const checkedCartContent = cartContent.filter(
      (content) => content.checked === true
    );
    let totalPrice = 0;
    let totalDelivery = 0;
    checkedCartContent.forEach((content) => {
      totalPrice += content.price;
      totalDelivery += content.delivery;
    });
    setResultData({
      totalPrice,
      totalDelivery,
      totalPayPrice: totalPrice + totalDelivery,
    });
  };

  useEffect(() => {
    getTotalPayPrice();
  }, [cartContent]);

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
                handleRemove={handleRemove}
              />
            ))}
        </div>
        <div>{<CartResult resultData={resultData} />}</div>
      </div>
    </div>
  );
};

export default Cart;
