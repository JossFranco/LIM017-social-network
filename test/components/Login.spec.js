import { login } from '../../src/components/Login';

jest.mock('../../src/firebase/control');

describe('login()', () => {
  it('btnLogin se encuentran en login()', () => {
    const resultLogin = login();
    const btnLogin = resultLogin.querySelector('#login');

    expect(btnLogin.innerHTML).toBe('Iniciar Sesión');
  });
  it('btnRegister se encuentran en login()', () => {
    const resultLogin = login();
    const btnRegister = resultLogin.querySelector('#btnRegister');

    expect(btnRegister.innerHTML).toBe('¿No tienes una cuenta? Regístrate');
  });
  it('btnGoogleLogin se encuentran en login()', () => {
    const resultLogin = login();
    const btnGoogleLogin = resultLogin.querySelector('#btnGoogleLogin');

    expect(btnGoogleLogin.innerHTML).toBe('Iniciar Sesión con Google');
  });
});
