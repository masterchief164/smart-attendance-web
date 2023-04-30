import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listSessions } from "../Api/Data";
import SessionCard from "../components/SessionCard";
import Nav from "../components/Nav";
import { UserContext } from "../utils/UserContext";

const Sessions = () => {
  const [courseId, setCourseId] = useState(useParams().id);
  const [sessions, setSessions] = useState(null);
  const [students, setStudents] = useState(null);
  const [user, setUser, courses, setCourses,currCourse] = React.useContext(UserContext);

  const getstudents = () => {
    const student_arr = courses.filter((i) => i._id === courseId);
    setStudents(student_arr[0].students);
  };
  useEffect(() => {
    getstudents();
    listSessions(courseId).then((s) => {
      setSessions(s);
    });
  }, []);
//   useEffect(() => {
//     console.log(students);
//   }, [students]);

  // console.log(useParams().id);
  //   console.log(courseId);
  return (
    <div className="page_layout">
      <Nav section={3} />

      <div className="page_content ">
        <h2>{currCourse}</h2>
        <div className="session-card-container">
          {sessions &&
            sessions.map((s) => {
              return (
                <SessionCard
                  date={s.date}
                  attendees={s.attendees.length}
                  sessionId={s._id}
                  students={students}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
