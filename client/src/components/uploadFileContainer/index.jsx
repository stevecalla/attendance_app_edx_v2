import { useState, useEffect } from "react";

import UploadFileSelector from "../uploadFileSelector/index.jsx";
import UploadFileButton from "../uploadFileButton";

function UploadFilePicker() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <div className="input-group mb-3">
      <UploadFileSelector
        setIsDisabled={setIsDisabled}
        setSelectedFiles={setSelectedFiles}
        selectedFiles={selectedFiles}
      />

      <UploadFileButton 
        isDisabled={isDisabled} 
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles} 
      />

    </div>
  );
}

export default UploadFilePicker;
