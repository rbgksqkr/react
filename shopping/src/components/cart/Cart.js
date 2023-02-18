import { useEffect, useState } from "react";
import CartContent from "./CartContent";
import CartResult from "./CartResult";

const Cart = () => {
  const [cartContents, setcartContents] = useState([
    {
      id: 1,
      name: "일렉트로룩스 a 유선 청소기",
      price: 91470,
      count: 1,
      src: `${process.env.PUBLIC_URL}/images/4.jpg`,
      delivery: 2500,
      checked: false,
    },
    {
      id: 2,
      name: "두피케어 샴푸",
      price: 11340,
      count: 1,
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
    setcartContents(
      cartContents.map((content) =>
        content.id === id ? { ...content, checked: !content.checked } : content
      )
    );
  };

  const handleRemove = (id) => {
    setcartContents(cartContents.filter((content) => content.id !== id));
  };

  const handleCountIncrease = (id) => {
    setcartContents(
      cartContents.map((content) =>
        content.id === id ? { ...content, count: content.count + 1 } : content
      )
    );
  };

  const handleCountDecrease = (id) => {
    setcartContents(
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
      totalPrice += content.price * content.count;
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
    console.log(cartContents);
  }, [cartContents]);

  return (
    <div>
      <h1>장바구니</h1>
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
