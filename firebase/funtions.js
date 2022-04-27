export const fnLocalStorage = (userLocalStorage) => {
  if (localStorage.getItem('email') !== null) {
    localStorage.removeItem('email');
    localStorage.setItem('email', userLocalStorage);
  } else {
    localStorage.setItem('email', userLocalStorage);
  }
};
