import Todo from "../components/todolist/Todo";
import { render } from "./utils/test";
import { fireEvent, screen } from "@testing-library/react";
import TodoInsert from "../components/todolist/TodoInsert";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("react todo test", () => {
  it("render", () => {
    render(<Todo />, container);
  });
});

describe("<TodoInsert />", () => {
  it("TodoInsert 컴포넌트 렌더링", () => {
    render(<TodoInsert onInsert={() => null} />, container);
  });

  it("input onChange event", () => {
    render(<TodoInsert onInsert={() => null} />, container);
    const placeholder = screen.getByPlaceholderText("할 일을 입력해주세요");
    fireEvent.change(placeholder, { target: { value: "react" } });
    expect(placeholder.value).toBe("react");
  });

  it("input onSubmit event", () => {
    render(<TodoInsert onInsert={() => null} />, container);
    const placeholder = screen.getByPlaceholderText("할 일을 입력해주세요");
    const button = screen.getByTestId("buttonImage");
    fireEvent.change(placeholder, { target: { value: "react" } });
    fireEvent.click(button);
    screen.getByDisplayValue("");
  });

  it("input onInsert event", () => {
    const onInsert = jest.fn();
    render(<TodoInsert onInsert={onInsert} />, container);
    const button = screen.getByTestId("buttonImage");
    const placeholder = screen.getByPlaceholderText("할 일을 입력해주세요");
    fireEvent.change(placeholder, { target: { value: "react" } });
    fireEvent.click(button);
    expect(onInsert).toHaveBeenCalledTimes(1);
    expect(onInsert).toBeCalledWith("react");
  });
});
