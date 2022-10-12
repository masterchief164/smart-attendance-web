import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const sendAuthorizationCode = async (code, setUser) => {
    try {
        const res = await axios.post(`${baseURL}/login/googleLogin`, {tokenId: code}, {withCredentials: true});
        localStorage.setItem('loggedIn', JSON.stringify(res.data))
        setUser(res.data);
        // console.log('hereData');
        localStorage.removeItem('state');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};


const logout = async (setUser) => {
    await axios.get(`${baseURL}/auth/logout`, {withCredentials: true})
        .then((response) => {
            if (response.status === 200) {
                console.log('logged out');
                localStorage.removeItem('loggedIn');
                setUser(null);
            }
        });
};


const getSession = async (user) => {
    return await axios.post(`${baseURL}/session/createSession`,{user}, {withCredentials: true})
}


export {
    sendAuthorizationCode, logout,
    getSession
};
