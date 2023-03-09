import { atom } from "recoil";
const initialState = [
  {
    id: 1,
    src: `/images/1.jpg`,
  },
  {
    id: 2,
    src: `/images/2.jpg`,
  },
  {
    id: 3,
    src: `/images/3.jpg`,
  },
];

// recoil + nextjs reload duplication error
const randomId = Math.random();
export const recoilAdvertiseImage = atom({
  key: `advertiseImage/${randomId}`,
  default: initialState,
});
