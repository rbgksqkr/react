import Todo from "../components/todolist/Todo";
import { render } from "./utils/test";
import { fireEvent, screen } from "@testing-library/react";
import TodoInsert from "../components/todolist/TodoInsert";

describe("react todo test", () => {
  it("render", () => {
    render(<Todo />);
  });
});

describe("<TodoInsert />", () => {
  it("TodoInsert 컴포넌트 렌더링", () => {
    render(<TodoInsert onInsert={() => null} />);
  });

  it("input onChange event", () => {
    render(<TodoInsert onInsert={() => null} />);
    const placeholder = screen.getByPlaceholderText("할 일을 입력해주세요");
    fireEvent.change(placeholder, { target: { value: "react" } });
    expect(placeholder.value).toBe("react");
  });

  it("input onSubmit event", () => {
    render(<TodoInsert onInsert={() => null} />);
    const placeholder = screen.getByPlaceholderText("할 일을 입력해주세요");
    const button = screen.getByTestId("buttonImage");
    fireEvent.change(placeholder, { target: { value: "react" } });
    fireEvent.click(button);
    screen.getByDisplayValue("");
  });

  it("input onInsert event", () => {
    const onInsert = jest.fn();
    render(<TodoInsert onInsert={onInsert} />);
    const button = screen.getByTestId("buttonImage");
    const placeholder = screen.getByPlaceholderText("할 일을 입력해주세요");
    fireEvent.change(placeholder, { target: { value: "react" } });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("react");
  });
});
