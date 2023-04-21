import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { UserContext } from "../utils/UserContext";
import { updateRole } from "../Api/Data";
import '../stylesheets/AdminBoard.css'
const ModalComponent = ({ open, closeModal,users,setUsers }) => {
  const [user, setUser, courses, setCourses, currUser, setCurrUser] =
    React.useContext(UserContext);
    const [type, setType] = useState(currUser.type)
    const submitHandler=()=>{
        updateRole(currUser.id,type).then((b)=>{
            if (b) {
                let newusers=users.map((usr)=>{
                    if(usr._id===currUser.id){
                        usr.userType="instructor"
                    }
                    return usr
                })
                setUsers(newusers)
                window.alert('updated successfully')
            }
            else{
                window.alert('failed')
            }
        })
        closeModal()
    }
  return (
    <div>
      <Modal open={open} onClose={closeModal} center>
        <div className="modal">

        <div>Name: {currUser.name}</div>
        <div>Email: {currUser.email}</div>
        <div  className="modal-select">Type: 
          <select value={type} onChange={(e)=>{setType(e.target.value)}}>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button onClick={submitHandler}>Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
