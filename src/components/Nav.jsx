import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { logout } from "../Api/Data";
import { UserContext } from "../utils/UserContext";
import { AiFillApple } from "react-icons/ai";
import '../stylesheets/Nav.css'
const Nav = ({section}) => {
  let navigate = useNavigate();
  const [user, setUser] = React.useContext(UserContext);
  const handleLogout = async () => {
    await logout(setUser);
    return navigate("/");
  };
  return (
    <div className="nav_container">
      <div className="nav">
        <img className="profileimg" src={user.picture} alt="" />
        <h4>{user.name}</h4>
        <h5>{user.roll}</h5>
        <div className="nav_links " >
          <Link to="/"  >
            <AiFillApple />
            Courses
          </Link>
          <Link to="/attendance">
            <AiFillApple />
            Attendance
          </Link>

          <Link to="/setting">
            <AiFillApple />
            Settings
          </Link>
          <Link onClick={handleLogout}>
            <AiFillApple />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
