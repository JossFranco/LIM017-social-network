import{} from '../../src/firebase/auth';
jest.mock('../../src/firebase/control');

describe('myFunction', () => {
    it('debería ser una función', () => {
      expect(typeof myFunction).toBe('function');
    });
  });
  