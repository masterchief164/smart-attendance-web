import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
const sendAuthorizationCode = async (code, setUser) => {
  try {
    const res = await axios.post(
      `${baseURL}/auth/googleLogin`,
      { tokenId: code },
      { withCredentials: true }
    );
    localStorage.setItem("loggedIn", JSON.stringify(res.data));
    setUser(res.data);
    // console.log('hereData');
    localStorage.removeItem("state");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const logout = async (setUser) => {
  await axios
    .get(`${baseURL}/auth/logout`, { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        console.log("logged out");
        localStorage.removeItem("loggedIn");
        setUser(null);
      }
    });
};

const getCourses = async () => {
  try {
    const res = await axios.get(`${baseURL}/course`, { withCredentials: true });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const AddCourse = async (c, setCourses) => {
  try {
    const body = {
      course: {
        name: c.name,
      },
    };
    const res = await axios.post(`${baseURL}/course`, body, {
      withCredentials: true,
    });
    setCourses((prev) => [...prev, res.data]);
  } catch (error) {
    console.log(error);
  }
};

const getAttendance = async (courseId) => {
  try {
    const res = await axios.get(`${baseURL}/session/${courseId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const findStudent = async (email) => {
  try {
    const res = await axios.get(`${baseURL}/user/${email}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const addStudent = async (courseId, email) => {
  try {
    const body = {
      student: email,
    };
    const res = await axios.patch(`${baseURL}/course/${courseId}`, body, {
      withCredentials: true,
    });
    console.log(res);
    // setCourses((prev) => [...prev, res.data]);
  } catch (error) {
    console.log(error);
  }
};
const getstudentattendence = async (courseId, studentEmailId) => {

  try {
    const res = await axios.get(`${baseURL}/course/${courseId}/${encodeURIComponent(studentEmailId)}`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getstudentattendence,
  sendAuthorizationCode,
  logout,
  getCourses,
  AddCourse,
  getAttendance,
  findStudent,
  addStudent,
};
