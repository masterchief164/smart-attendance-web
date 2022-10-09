import axios from 'axios';



const sendAuthorizationCode = async (code, setUser) => {
  try {
    const res = await axios.post(`http://localhost:8000/login/googleLogin`, { tokenId: code }, { withCredentials: true });
    localStorage.setItem('loggedIn',JSON.stringify(res.data))
    setUser(res.data);
    // console.log('hereData');
    localStorage.removeItem('state');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};



const logout = async (setUser) => {
  await axios.get(`http://localhost:8000/auth/logout`, { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        console.log('logged out');
        localStorage.removeItem('loggedIn');
        setUser(null);
      }
    });
};







export {
 sendAuthorizationCode, logout
};
