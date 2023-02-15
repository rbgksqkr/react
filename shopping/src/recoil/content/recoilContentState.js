import { atom, selector } from "recoil";

const newContentInitialState = [
  {
    id: 1,
    name: "일렉트로룩스 a 유선 청소기",
    price: "491,470원",
    src: `${process.env.PUBLIC_URL}/images/4.jpg`,
  },
  {
    id: 2,
    name: "일렉트로룩스 b 유선 청소기",
    price: "494,470원",
    src: `${process.env.PUBLIC_URL}/images/4.jpg`,
  },
  {
    id: 3,
    name: "일렉트로룩스 c 유선 청소기",
    price: "497,470원",
    src: `${process.env.PUBLIC_URL}/images/4.jpg`,
  },
];

const recommendContentInitialState = [
  {
    id: 1,
    name: "두피케어 샴푸",
    price: "11,340원",
    src: `${process.env.PUBLIC_URL}/images/1.jpg`,
  },
  {
    id: 2,
    name: "두피케어 샴푸",
    price: "11,340원",
    src: `${process.env.PUBLIC_URL}/images/1.jpg`,
  },
  {
    id: 3,
    name: "두피케어 샴푸",
    price: "11,340원",
    src: `${process.env.PUBLIC_URL}/images/1.jpg`,
  },
  {
    id: 4,
    name: "두피케어 샴푸",
    price: "11,340원",
    src: `${process.env.PUBLIC_URL}/images/1.jpg`,
  },
  {
    id: 5,
    name: "두피케어 샴푸",
    price: "11,340원",
    src: `${process.env.PUBLIC_URL}/images/1.jpg`,
  },
  {
    id: 6,
    name: "두피케어 샴푸",
    price: "11,340원",
    src: `${process.env.PUBLIC_URL}/images/1.jpg`,
  },
];

// recoil + nextjs reload duplication error
const randomId = Math.random();

export const recoilNewContentList = atom({
  key: `recoilNewContentList/${randomId}`,
  default: newContentInitialState,
});

export const recoilRecommendContentList = atom({
  key: `recoilRecommendContentList/${randomId}`,
  default: recommendContentInitialState,
});
