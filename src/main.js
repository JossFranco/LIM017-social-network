import './config/firebase.config.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/Login.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { home } from './components/Home.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/register': register,
  '/home': home,
};
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.appendChild(component());
};
rootDiv.appendChild(component());

// if(typeof(Storage) !== 'undefined'){
  //   //Saludar
  //   saludar();
  //   //Contador
  //   contador();
  //  //Botones de incrementar y decrementar
  //  document.getElementById('incrementar').addEventListener('click', incrementar);
  //  document.getElementById('decrementar').addEventListener('click', decrementar);
  //  document.getElementById('logOut').addEventListener('click', logOut);
  // } else {
  //   alert('Elnavegador NO soporta WebStorage');
  // }
  
  
  // function saludar(){
  //   // Saludo al usuario
  //   alert('El navegador soporta WebStorage');
  //     if(localStorage.getItem('usuario') != null){
  //       document.getElementById('saludo').innerHTML = 'Bienvenido/a de nuevo,  '
  //        +localStorage.getItem('usuario') + '!';
  //     }else{
  //       var nombre = prompt('¿Cómo te llamas?')
  //       localStorage.setItem('usuarios', nombre);
  //       document.getElementById('saludo').innerHTML = 'Tu primera visita ' +localStorage.getItem('usuario');
  //     }
  //   }
  
  // function contador(){
  //   //Contador
  //   if(!sessionStorage.getItem('contador')){
  //     sessionStorage.setItem('contador', '0')
  //   }
  //     document.getElementById('contador').innerHTML = 'Contador; '+ sessionStorage.getItem('contador');
   
  // }
  
  // //incrementar
  
  // function incrementar () {
  //  sessionStorage.setItem('contador', Number(sessionStorage.getItem('contador'))+1);
  //  document.getElementById('contador').innerHTML ) 'Contador: '+sessionStorage.getItem('contador');
  
  // }
  
  
  // function incrementar () {
  //   sessionStorage.setItem('contador', Number(sessionStorage.getItem('contador')) -1);
  //   document.getElementById('contador').innerHTML ) 'Contador: '+sessionStorage.getItem('contador');
   
  //  }
  
  //  function logOut(){
  //    alert('Se ha cerrado la sesión de  ' + localStorage.getItem('usuario'));
  //    localStorage.removeItem('usuario');
  //    document.getElementById('saludo').innerHTML= '';
