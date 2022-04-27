import { onNavigate } from "../src/main.js";
import { home } from "./../src/components/Home.js";
import { login } from "./../src/components/Login.js";
import { register } from "./../src/components/Register.js";
/**
 * @jest-environment jsdom
 */
jest.mock("../src/firebase/control");

describe("onNavigate()", () => {
  it("Debe cargar la vista de Home", () => {
    document.body.innerHTML = "<div id='root'></div>";
    const homeView = home();
    const onHome = onNavigate("/home");
    console.log(onHome);
    expect(onNavigate("/home")).toEqual(homeView);
  });
  it("Debe cargar vista Login", () => {
    document.body.innerHTML = "<div id='root'></div>";
    const loginView = login();
    console.log(loginView);
    expect(onNavigate("/login")).toEqual(loginView);
  });
  it("Debe cargar vista Register", () => {
    document.body.innerHTML = "<div id='root'></div>";
    const registerView = register();
    console.log(registerView);
    expect(onNavigate("/register")).toEqual(registerView);
  });
});
