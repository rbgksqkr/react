import { atom, selector } from "recoil";
const initialState = [
  {
    id: 1,
    src: "images/1.jpg",
    active: true,
  },
  {
    id: 2,
    src: "images/2.jpg",
    active: false,
  },
  {
    id: 3,
    src: "images/3.jpg",
    active: false,
  },
];

// recoil + nextjs reload duplication error
const randomId = Math.random();
export const recoilAdvertiseImage = atom({
  key: `advertiseImage/${randomId}`,
  default: initialState,
});

export const recoilAdvertiseId = atom({
  key: `currentAdvertiseId/${randomId}`,
  default: 1,
});
