const INSERT = "INSERT";
const TOGGLE = "TOGGLE";
const REMOVE = "REMOVE";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const FINISHED = "FINISHED";

export { INSERT, TOGGLE, REMOVE, INCREASE, DECREASE, FINISHED };

let id = 4;
export const insert = (text) => ({
  type: INSERT,
  todo: { id: id++, text, checked: false },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const finished = () => ({ type: FINISHED });
