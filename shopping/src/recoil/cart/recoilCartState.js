import { atom, selector } from "recoil";

const cartContentInitialState = [
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
];

// recoil + nextjs reload duplication error
const randomId = Math.random();

export const recoilCartContent = atom({
  key: `recoilCartContent/${randomId}`,
  default: cartContentInitialState,
});
