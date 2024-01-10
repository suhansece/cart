import Cookies from 'js-cookie';

export const isLoggedIn = () => {
  const token = Cookies.get('token'); // Replace with your actual token cookie name
  return token !== undefined && token !== null;
};


