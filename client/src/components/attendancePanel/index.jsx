import { useState } from "react";

import "./attendancePanel.css";

import UploadStatus from "../uploadStatus";
import UploadFileContainer from "../uploadFileContainer";
import StudentStats from "../studentStats";
import StudentContainer from "../studentContainer";

function AttendancePanel() {
  const [ isStudentFileUploaded, setIsStudentFileUploaded ] = useState(false);

  return (
    <div className="m-4">
      <UploadStatus />
      <UploadFileContainer isStudentFileUploaded={isStudentFileUploaded} setIsStudentFileUploaded={setIsStudentFileUploaded} />
      <StudentStats />
      <StudentContainer isStudentFileUploaded={isStudentFileUploaded} />
    </div>
  );
}

export default AttendancePanel;
