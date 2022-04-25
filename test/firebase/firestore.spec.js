import {publication } from '../../src/firebase/firestore.js';
 

/**
 * @jest-environment jsdom
 */
 
jest.mock('../../src/firebase/control');

describe('publication', () => {
    it('', () => {
        expect.assertions(1);

      const postCollection = {
        title: 'Titulo',
        text: 'Hola Mundo',
        author: 'email@gmail.com',
        likes: ['megusta@gmail.com'],
        timestamp: 'Tue Apr 19 2022',
      };
        const posts =  publication( postCollection)
        .then(() => {

        })
        .catch(()=>{

        });
        expect(postCollection.title).toEqual('Titulo');
        expect(postCollection.text).toEqual('Hola Mundo');
        expect(postCollection.author).toEqual('email@gmail.com');
        expect(postCollection.likes).toEqual(['megusta@gmail.com']);
        expect(postCollection.timestamp).toEqual('Tue Apr 19 2022');
    })
});
