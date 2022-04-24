import { registerWithEmail } from '../../src/firebase/auth.js';
 
// @jest-environment jsdom
 
jest.mock('../../src/firebase/control');

describe('registerWithEmail', () => {
    it('deberia ser una funcion', async () => {
        const email = 'user@gmail.com';
        const password = 'Laboratoria'
        const user = await registerWithEmail( email , password);
        expect(user.email).toEqual('user@gmail.com')
        expect(user.password).toEqual('Laboratoria') ;
        expect(typeof registerWithEmail).toBe('function')
    })
});