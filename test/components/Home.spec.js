import { home } from '../../src/components/Home.js';

jest.mock('../../src/firebase/control');

describe('home()', () => {
  it('Bones que se encuentran en home()', () => {
    expect.assertions(1);
    const resultHome = home();
    const btnLogOut = resultHome.querySelector('#login');
    const btnSave = resultHome.querySelector('#btnSave');
    expect(btnLogOut.textContent).toBe('Cerrar Sesión');
    expect(btnSave.textContent).toBe('Publicar');
  });
});
