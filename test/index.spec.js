// importamos la funcion que vamos a testear

// eslint-disable-next-line import/no-unresolved
import { registerWithEmail } from '../../src/components/register';

jest.mock('../../src/firebase/control');
jest.mock('../../src/firebase/auth');
jest.mock('../../src/firebase/firestore');

/* describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */

describe('iniciarSesiónDeUsuario', () => {
  it('deberia ser una funcion', () => {
    expect(typeof iniciarSesiónDeUsuario).toBe('function');
  });
  it('Debería poder iniciar sesion', () => iniciarSesiónDeUsuario('jossel78@hotmail.com', '6754321')
    .then(() => {
      expect(registerWithEmail.mock.calls[0][1]).toBe('jossel78@hotmail.com');
      expect(registerWithEmail.mock.calls[0][2]).toBe('6754321');
    }));
});
