import { useState, useEffect } from 'react';

import CopyButton from '../copyButton/copyButton';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './attendanceStatusPanel.css';

function AttendanceStatusPanel({ studentAttendance }) {
  const [targetClickedIndex, settargetClickedIndex] = useState(false);
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

  async function handleCopyClick() {
    console.log('copy click');

    try {

      // Copy the attendance status string to the clipboard
      await navigator.clipboard.writeText(attendanceStatus);

      console.log('Copied to clipboard:', attendanceStatus);

      // setIsClickedToCopy(true);
      settargetClickedIndex(true);

      setTimeout(() => {
        settargetClickedIndex(false);
      }, 2000);

      // set navigator clipboard content to "content cleared after 10 seconds" after 10 seconds
      // setTimeout(() => {
      //   navigator.clipboard.writeText('Content cleared after 10 seconds');
      // }, 10000);

    } catch (error) {

      console.error('Failed to copy attendance status to clipboard:', error);

    }
  }

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

      {/* <CopyButton isClickedToCopy={isClickedToCopy} handleCopyClick={() => handleCopyClick()} /> */}

      <CopyButton
        targetClickedIndex={targetClickedIndex}
        copyContentIndex={true}
        handleCopyClick={handleCopyClick}
      />

    </FloatingLabel>
  )
}

export default AttendanceStatusPanel;
