/**
 * 컴포넌트 렌더링
 * todo 추가
 * todo 삭제
 * todo 정렬
 */

import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../reducers";
import { Provider } from "react-redux";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export { render };
