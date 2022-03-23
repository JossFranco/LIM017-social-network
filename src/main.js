import './config/firebase.config.js';
// eslint-disable-next-line import/no-cycle
import { home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
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
