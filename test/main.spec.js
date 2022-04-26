<<<<<<< HEAD
=======
import { onNavigate} from './../src/main.js';
import { home } from '../../src/components/Home.js'
>>>>>>> upstream/main
/**
 * @jest-environment jsdom
 */
 jest.mock('../../src/firebase/control');
 
 describe ('onNavigate()', () => {
  it('Debe cargar la vista de home', () =>{
    document.body.innerHTML = "<div id='root'></div>";
    const home = home();
    expect(onNavigate('/home')).toEqual(home) 
   });

<<<<<<< HEAD
<<<<<<< HEAD
it('use', () => {
  // eslint-disable-next-line no-multi-assign
  const rootDiv = (document.body.innerHTML = "<div id='rootDiv'>Publicar</div>");

  // const component = component();
  // rootDiv.appendChild(component);

  expect(rootDiv).not.toBeNull();
  // expect(rootDiv).toContain(component());
});
=======
 describe ('register()', () => {
  it('Estructura', () =>{
    
    const rootDiv = document.body.innerHTML = "<div id='rootDiv'></div>";
    const components = {
      const register:  = () => {
        const registerDiv = document.createElement('div');
        registerDiv.innerHTML = 'Hola Mundo';
        return registerDiv
    }
      
   })
})
    
    // const component = component();
    // rootDiv.appendChild(component);
    
    expect(rootDiv).not.toBeNull();
    // expect(rootDiv).toContain(component());
  });
>>>>>>> upstream/main
=======
})
 
>>>>>>> upstream/main
