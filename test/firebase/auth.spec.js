import { registerWithEmail, loginWithEmail, logOut } from '../../src/firebase/auth.js';
 

/**
 * @jest-environment jsdom
 */
 
jest.mock('../../src/firebase/control.js');

describe('registerWithEmail', () => {
    it('', () => {
        document.body.innerHTML = "<div id='root'></div>"
         registerWithEmail( ).then((usr)=>{
         expect(usr).toBe({})
        })
        .catch(()=>{

        })
    })
});


