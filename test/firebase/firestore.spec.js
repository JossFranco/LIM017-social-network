import { publication } from '../../src/firebase/firestore';

jest.mock('../../src/firebase/control');

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof publication).toBe('function');
  });
});
