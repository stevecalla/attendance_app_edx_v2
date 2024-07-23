import { useState } from "react";

import "./attendancePanel.css";

import UploadStatus from "../uploadStatus";
import UploadFileContainer from "../uploadFileContainer";
import StudentStats from "../studentStats";
import StudentContainer from "../studentContainer";

function AttendancePanel() {
  const [isStudentFileUploaded, setIsStudentFileUploaded] = useState(false);
  const [isParticipantFileUploaded, setIsParticipantFileUploaded] = useState(false);
  const [ matchThreshold, setMatchThreshold ] = useState(0.60);
  const [ minutesThreshold, setMinutesThreshold ] = useState(0);

  return (
    <div className="m-4">
      <UploadStatus />
      <UploadFileContainer
        isStudentFileUploaded={isStudentFileUploaded}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        isParticipantFileUploaded={isParticipantFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
      />
      <StudentStats 
        setMatchThreshold={setMatchThreshold}
        setMinutesThreshold={setMinutesThreshold}
      />
      <StudentContainer 
        isStudentFileUploaded={isStudentFileUploaded} 
        isParticipantFileUploaded={isParticipantFileUploaded}
        matchThreshold={matchThreshold}
        minutesThreshold={minutesThreshold}
      />
    </div>
  );
}

export default AttendancePanel;
