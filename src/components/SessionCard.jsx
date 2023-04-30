import React from "react";
import "../stylesheets/SessionCard.css";
import { AiOutlineDownload } from "react-icons/ai";
import { getAttendees } from "../Api/Data";
import * as XLSX from "xlsx";

const SessionCard = ({ date, attendees, sessionId, students }) => {
  function getDate(date) {
    const datetemp = new Date(date);
    return datetemp.toLocaleString("en-GB");
  }

  const downloadxls = (data) => {
    let ws = XLSX.utils.json_to_sheet(data);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "sheet");
    let buf = XLSX.write(wb, { bookType: "xlsx", type: "buffer" }); // generate a nodejs buffer
    let str = XLSX.write(wb, { bookType: "xlsx", type: "binary" }); // generate a binary string in web browser
    XLSX.writeFile(wb, `${getDate(new Date(Date.parse(date)))}.xlsx`);
  };

  const dwd = (atnd) => {
    var result = [];
    for (let index = 0; index < atnd.length; index++) {
      const element = atnd[index];
      result.push(element[Object.keys(element)[0]]);
    }
    let final = students.map((at) => {
      if (result.includes(at._id)) {
        return { Name: at.name, RollNo: at.roll, attendance: "P" };
      } else {
        return { Name: at.name, RollNo: at.roll, attendance: "A" };
      }
    });
    downloadxls(final);
  };
  const download = () => {
    getAttendees(sessionId).then((data) => {
      dwd(data);
    });
  };
  return (
    <div className="session-card">
      <h3>
        <span>Session Date:</span>&nbsp;{getDate(new Date(Date.parse(date)))}
      </h3>
      <div className="download-icon">
        <AiOutlineDownload onClick={download} />
      </div>
    </div>
  );
};

export default SessionCard;
