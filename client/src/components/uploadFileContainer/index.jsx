import { useState, useEffect } from "react";

import UploadFileSelector from "../uploadFileSelector/index.jsx";
import UploadFileButton from "../uploadFileButton";

function UploadFileContainer({ isStudentFileUploaded, setIsStudentFileUploaded, isParticipantFileUploaded, setIsParticipantFileUploaded }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <div className="input-group mb-3">
      <UploadFileSelector
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        isStudentFileUploaded={isStudentFileUploaded}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        isParticipantFileUploaded={isParticipantFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
      />

      <UploadFileButton 
        isDisabled={isDisabled} 
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles} 
        setSelectedFiles={setSelectedFiles}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
      />

    </div>
  );
}

export default UploadFileContainer;
