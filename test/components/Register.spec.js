import { register } from "../../src/components/Register";
describe ('register()', () => {
    it('Estructura', () =>{
     const register =  () => {
      const registerDiv = document.createElement('div');
    }

    })
})

describe ('Pass = Password', () => {
    it('Mensaje de error', () =>{
    document.body.innerHTML = `<div id = "informationRegisterErr"></div>`
    const result =  registerWithEmail();
    const pass = result.querySelector('#inputPass');
    const password = result.querySelector('#inputPassword');

    pass.value = 'pass1';
    password.value = 'pass2';

    const btn = result.querySelector('#btnRegisterUser');
    btn.dispatchEvent(new Event('click'));

    const information = document.querySelector('#informationRegisterErr');
    expect(information.textContent).toBe('Las contraseñas no coinciden.');

    })
})