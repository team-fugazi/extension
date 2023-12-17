import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainScreen from "../pages/Main";
import { LoginButton } from "../components/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react")
beforeEach(() => {
  //@ts-ignore
  useAuth0.mockReturnValue({
    loginWithPopup: jest.fn(),
    isAuthenticated: false,
    getIdTokenClaims: jest.fn().mockResolvedValue({ __raw: "something" })
  });
});

test("expect login button to be rendered", async () => {
  const { getByTestId } = render(<LoginButton />);
  const loginButton = getByTestId("login-button");
  expect(loginButton).toBeInTheDocument()

});

test("a login popup appears when clicking on login", async () => {
  const { getByTestId } = render(<LoginButton />);
  const { loginWithPopup } = useAuth0();
  const loginElement = getByTestId("login-button");
  fireEvent.click(loginElement);
  await waitFor(() => expect(loginWithPopup).toHaveBeenCalledTimes(1))
});


test("user is displayed in header when logged in", async () => {
  //@ts-ignore
  useAuth0.mockReturnValue({
    loginWithPopup: jest.fn(),
    isAuthenticated: true,
    getIdTokenClaims: jest.fn().mockResolvedValue({ __raw: "something" }),
  });


  const { container } = render(<MainScreen />);

});


