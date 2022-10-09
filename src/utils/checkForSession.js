const checkLogin = (setUser) => {
  let tmp = localStorage.getItem('loggedIn');
  if (tmp != null) {
    tmp = JSON.parse(tmp);
    if (new Date(tmp.exp).getTime() > new Date().getTime()) {
      setUser(JSON.parse(localStorage.getItem('loggedIn')));
    } else {
      localStorage.removeItem('loggedIn');
    }
  }
};

export default checkLogin;
