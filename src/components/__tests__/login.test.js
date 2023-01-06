/**
 * test@zyax.se
 * !zyaxSe981
 * react-scripts test --env=jsdom
 * node --experimental-vm-modules node_modules/jest/bin/jest.js
 */
import Login from "../login";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
// import App, {loginSubmit} from '../../App';

describe("login functionality", () => {
  test("valid credentials will login", () => {
    render(<Login />);
    let loginComponent = screen.getByTestId("login-comp");
    expect(loginComponent).toBeInTheDocument();
  });
  test("email field should have label", () => {
    render(<Login />);
    const emailInputNode = screen.getByLabelText("Email address");
    expect(emailInputNode.getAttribute("name")).toBe("EmailInput");
  });
  test("validate Email Input", () => {
    const mockFn = jest.fn();
    const inputText = "test@zyax.se";
    const passText = "!zyaxSe981";
    const { getByRole } = render(
      <Login handleSubmit={mockFn} email={inputText} password={passText} />
    );
    const emailInputNode = screen.getByLabelText("Email address");
    expect(emailInputNode.value).toMatch("");
    const buttonNode = screen.getByRole("button");
    fireEvent.submit(buttonNode);
    expect(mockFn).not.toHaveBeenCalledTimes(1);
  });
});
