import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainScreen from "../pages/Main";

//Mock login function which should return user information

test("user information is rendered when logging in", async () => {
  const { container } = render(<MainScreen />);

  //container.querySelector(".login-button");

  fireEvent.click(screen.getByTestId("login-button"));
});
