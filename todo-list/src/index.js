import ReactDOM from "react-dom/client";
import App from "./App";
import rootReducer from "./reducers";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
