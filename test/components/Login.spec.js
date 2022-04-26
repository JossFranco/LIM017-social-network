import { login } from "../../src/components/Login";


jest.mock('../../src/firebase/control');

describe ('login()', () => {
    it('btnRegister, btnLogin y btnGoogleLogin se encuentran en login()', () =>{
     expect.assertions(1);
     const resultLogin = login();
     const btnLogin = resultLogin.querySelector('#login');
     const btnRegister = resultLogin.querySelector('#btnRegister');
     const btnGoogleLogin = resultLogin.querySelector('#btnGoogleLogin');
     expect(btnLogin.textContent).toBe('Iniciar Sesión');
     expect(btnRegister.textContent).toBe('¿No tienes una cuenta? Regístrate');
     expect(btnGoogleLogin.textContent).toBe('Iniciar Sesión con Google');
    })
})