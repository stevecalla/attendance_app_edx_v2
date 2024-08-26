import { useState, useEffect } from 'react';

import CopyButton from '../copyButton/copyButton';
import { copyContentToClipboard } from '../../utils/copyContentToClipboard';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './attendanceStatusPanel.css';

function AttendanceStatusPanel({ studentAttendance }) {
  const [targetClickedIndex, setTargetClickedIndex] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState('');

  useEffect(() => {
    if (studentAttendance) {
      // Wrap each array element in quotes
      let formattedData = studentAttendance?.map(({ isInAttendance }) => isInAttendance === true ? `'Present'` : `'Absent'`);

      // Set the content of text area to an array
      formattedData = `[${formattedData.join(", ")}]`;

      setAttendanceStatus(formattedData);

      console.log(formattedData);
    }
  }, [studentAttendance]);

  // Handle changes to the text area
  const handleChange = (event) => {
    setAttendanceStatus(event.target.value);
  };

  return (
    <FloatingLabel
      controlId='floatingTextarea'
      label='Attendance Status'
      className='m-4'
    >
      <Form.Control
        className='status-text-area'
        as='textarea'
        placeholder='Leave a comment here'
        value={attendanceStatus}
        onChange={handleChange}
      />
      <CopyButton
        targetClickedIndex={targetClickedIndex}
        copyContentIndex={true}
        handleCopyClick={() => copyContentToClipboard(attendanceStatus, setTargetClickedIndex, true, setIsDisabled)}
        isDisabled={isDisabled}
      />
    </FloatingLabel>
  )
}

export default AttendanceStatusPanel;
