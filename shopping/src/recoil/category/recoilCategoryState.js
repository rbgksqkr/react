import { atom } from "recoil";

const initialState = [
  {
    id: 1,
    name: "패션의류 / 잡화",
  },
  {
    id: 2,
    name: "뷰티",
  },
  {
    id: 3,
    name: "출산 / 유아동",
  },
  {
    id: 4,
    name: "식품",
  },
  {
    id: 5,
    name: "주방용품",
  },
  {
    id: 6,
    name: "생활용품",
  },
];

// recoil + nextjs reload duplication error
const randomId = Math.random();

export const recoilCategoryList = atom({
  key: `recoilCategoryList${randomId}`,
  default: initialState,
});
