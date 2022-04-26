import { postsTemplate } from "../../src/components/Login";


jest.mock('../../src/firebase/control');

describe ('postsTemplate()', () => {
    it('Botones que se encuentran en postsTemplate()', () =>{
     const resultTemplate = postsTemplate();
     const containerPost = resultTemplate.createElement('div');
     const btn = resultTemplate.querySelector("#btnsDelete");
     expect(btnsDelete.textContent).toBe('Iniciar Sesión');
    })
})