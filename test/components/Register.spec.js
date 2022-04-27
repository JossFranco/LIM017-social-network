import { register } from '../../src/components/Register';
import { registerWithEmail } from '../../src/firebase/auth';

jest.mock("../../src/firebase/control");

<<<<<<< HEAD
describe('register()', () => {
  it('El botón de Registrarse se encuentra en register()', () => {
    const result = register();
    const btnRegister = result.querySelector('#btnRegisterUser');
    btnRegister.dispatchEvent(new Event('click'));
    expect(btnRegister.textContent).toBe('Registrarme');
  });
});

describe('register()', () => {
  it('Datos de Registro', () => {
    const result = register();
    const fnResult = registerWithEmail();
    const inputEmail = result.querySelector('#inputEmail');
    const inputPass = result.querySelector('#inputPass');
    const inputPassword = result.querySelector('#inputPassword');
    const btn = result.querySelector('#btnRegisterUser');
    const informationDiv = result.querySelector('#informationRegister');

    inputEmail.value = 'emilce@gmail.com';
    inputPass.value = 'Passw1';
    inputPassword.value = 'Passw1';

    btn.dispatchEvent(new Event('click'));

    expect(informationDiv.innerHTML).toEqual(
      'Confírmanos que la  dirección de correo electrónico agregada te pertenece. Hazlo a través del correo electrónico que te envíamos.',
=======
describe("register()", () => {
  it("El botón de Registrarse se encuentra en register()", () => {
    const result = register();
    const btnRegister = result.querySelector("#btnRegisterUser");
    btnRegister.dispatchEvent(new Event("click"));
    expect(btnRegister.textContent).toBe("Registrarme");
  });
});

describe("register()", () => {
  it("Datos de Registro", () => {
    const result = register();
    const fnResult = registerWithEmail();
    const inputEmail = result.querySelector("#inputEmail");
    const inputPass = result.querySelector("#inputPass");
    const inputPassword = result.querySelector("#inputPassword");
    const btn = result.querySelector("#btnRegisterUser");
    const informationDiv = result.querySelector("#informationRegister");

    inputEmail.value = "emilce@gmail.com";
    inputPass.value = "Passw1";
    inputPassword.value = "Passw1";

    btn.dispatchEvent(new Event("click"));

    expect(informationDiv.innerHTML).toEqual(
      "Confírmanos que la  dirección de correo electrónico agregada te pertenece. Hazlo a través del correo electrónico que te envíamos."
>>>>>>> upstream/main
    );
  });
});

<<<<<<< HEAD
describe('Las contraseñas no cinciden', () => {
  it('Mensaje de error', () => {
    const result = register();
    const inputEmail = result.querySelector('#inputEmail');
    const inputPass = result.querySelector('#inputPass');
    const inputPassword = result.querySelector('#inputPassword');
    const btn = result.querySelector('#btnRegisterUser');
    const informationDiv = document.querySelector('#informationRegisterErr');

    inputEmail.value = 'emilce@gmail.com';
    inputPass.value = 'Passw1';
    inputPassword.value = 'Passw2';

    // btn.dispatchEvent(new Event('click'));

    expect(informationDiv.textContent).toBe('Las contraseñas no coinciden.');
=======
describe("Las contraseñas no cinciden", () => {
  it("Mensaje de error", () => {
    const result = register();
    const inputEmail = result.querySelector("#inputEmail");
    const inputPass = result.querySelector("#inputPass");
    const inputPassword = result.querySelector("#inputPassword");
    const btn = result.querySelector("#btnRegisterUser");
    const informationDiv = document.querySelector("#informationRegisterErr");

    inputEmail.value = "emilce@gmail.com";
    inputPass.value = "Passw1";
    inputPassword.value = "Passw2";

    // btn.dispatchEvent(new Event('click'));

    expect(informationDiv.textContent).toBe("Las contraseñas no coinciden.");
>>>>>>> upstream/main
  });
});
