import { registerWithEmail, loginWithEmail, logOut } from '../../src/firebase/auth.js';
 

/**
 * @jest-environment jsdom
 */
 
jest.mock('../../src/firebase/control');

describe('registerWithEmail', () => {
    it('', () => {
        expect.assertions(1);
        
        const email = 'user@gmail.com';
        const password = 'Laboratoria'
        const user =  registerWithEmail( email , password)
        .then(() => {

        })
        .catch(()=>{

        });
        expect(user.email).toEqual('user@gmail.com')
        expect(user.password).toEqual('Laboratoria') ;
        expect(typeof registerWithEmail).toBe('function')
    })
});


describe(' loginWithEmail', () => {
    it('', () => {
        expect.assertions(1);
        
        const email = 'user@gmail.com';
        const password = 'Laboratoria'
        const user =  loginWithEmail( email , password)
        .then(() => {

        })
        .catch(()=>{

        });
        expect(user.email).toEqual('user@gmail.com')
        expect(user.password).toEqual('Laboratoria') ;
        expect(typeof loginWithEmail()).toBe('function')
    })
});

describe('logOut', () => {
    it('', () => {
        

        expect(typeof logOut()).toBe('function')
    })
});

