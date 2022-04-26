import { onNavigate} from './../src/main.js';
import { home } from '../../src/components/Home.js'
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

})
 