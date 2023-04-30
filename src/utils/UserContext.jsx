import React from "react";

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    (localStorage.getItem("loggedIn") != null &&
      new Date(JSON.parse(localStorage.getItem("loggedIn")).exp).getTime() >
        new Date().getTime())?JSON.parse(localStorage.getItem("loggedIn")):null
  );
  const [courses, setCourses] = React.useState(null);
  const [currUser, setCurrUser] = React.useState(user)
  const [currCourse, setCurrCourse] = React.useState(null)
  return (
    <UserContext.Provider
      value={[user, setUser, courses, setCourses,currUser,setCurrUser,currCourse,setCurrCourse]}
    >
      {children}
    </UserContext.Provider>
  );
};
