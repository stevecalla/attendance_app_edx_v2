import { useState, useRef } from 'react'

import UploadFileSelector from '../uploadFileSelector/uploadFileSelector';
import UploadFileButton from '../uploadFileButton/uploadFileButton';

function UploadFileContainer ({
  isStudentFileUploaded,
  setIsStudentFileUploaded,
  isParticipantFileUploaded,
  setIsParticipantFileUploaded
}) {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isDisabled, setIsDisabled] = useState(true)
  const fileInputRef = useRef(null)

  return (
    <div className='input-group mb-3'>
      <UploadFileSelector
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        isStudentFileUploaded={isStudentFileUploaded}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        isParticipantFileUploaded={isParticipantFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
        fileInputRef={fileInputRef}
      />

      <UploadFileButton
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
        fileInputRef={fileInputRef}
      />
    </div>
  )
}

export default UploadFileContainer
