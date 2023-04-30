import React from "react";
import "../stylesheets/SessionCard.css";
import { AiOutlineDownload } from "react-icons/ai";
import { getAttendees } from "../Api/Data";
const SessionCard = ({ date, attendees, sessionId, students }) => {
  const downloadFile = (data) => {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "download.csv");
    a.click();
  };
  const objectToCsv = function (data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    for (const row of data) {
        const values = headers.map(header => {
            const val = row[header]
            return `"${val}"`;
        });
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
};
  function getDate(date) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      months[date.getUTCMonth()] +
      " " +
      date.getUTCDate() +
      ", " +
      date.getUTCFullYear()
    );
  }
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
    downloadFile(objectToCsv(final));
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
