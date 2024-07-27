import { useState, useRef } from 'react';

import "./instructionsContainer.css";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import AttendancePanel from '../attendancePanel/attendancePanel';
// import AttendanceStatusPanel from '../attendanceStatusPanel/attendanceStatusPanel';

function AttendanceTabs() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const bodyRefs = useRef([]);

  const instructions = [
    {
      header: "Summary",
      body: `
        <ul className="m-0">
          <li>The student's Zoom name should be as similar to the roster name as possible.</li>
          <li>Install Chrome scripts from library below.</li>
           <li>Watch the demo video below to setup quickly.</li>
        </ul>`,
    },
    {
      header: "Get Student Roster",
      body: `
        <ul className="m-0">
          <li>Use Chrome scripts to manually download roster from
            <a className="link-color" href="https://idp.bootcampspot.com/ui/" role="button" target="_blank">
              Bootcamp
            </a>
          </li>
          <code className="my-1 me-4">
              Navigate To:
              <br />  > Attendance Menu
              <br />  > Click the "Date" Link
              <br />  > Open Chrome Inpector
              <br />  > Execute "Select Student List" Script
              <br />  > Execute "Export Student List" Script
              <br />  > Report should be stored in Downloads folder
              <br />  > Path Similar To:
                <code className="my-1 mx-4">
                  '/Users/USER_NAME/Downloads/'
                </code>
          </code>
        </ul>
      `,
    },
    {
      header: "Get Zoom Participants Report",
      body: `
        <ul>
          <li>Manually download Zoom Participants Report from
            <a className="link-color" href="https://idp.bootcampspot.com/ui/" role="button" target="_blank">
              Bootcamp
            </a>
          </li>
          <code className="my-1 me-4">
              Navigate To:
              <br />  > Zoom Menu 
              <br />  > Previous Meetings Tab 
              <br />  > Click the "Report" Link 
              <br />  > Click the "Export to CSV file" Link
              <br />  > Report should be stored in Downloads folder
              <br />  > Path Similar To:
                <code className="my-1 mx-4">
                  '/Users/<USER_NAME>/Downloads/'
                </code>
          </code>
        </ul>
      `,
    },
    {
      header: "Upload Reports",
      body: `
        <ul>
          <li>Upload the Student Roster & Zoom Participants Report</li>
          <code className="my-1 me-4">
              > Click the "Choose File" button
              <br />  > Select the Student Roster then click Upload
              <br />  > The student roster will render
              <br />  > Click the Choose File button above
              <br />  > Select the Zoom Participants Report then click Upload
              <br />  > The contents will render with attendance results
              <br />  > Adjust the "match" and/or "minutes" threshold as necessary
            </code>
          </li>
        </ul>
      `,
    },
    {
      header: "Get Attendance Status",
      body: `
        <ul>
          <li>Get attendance status</li>
          <code className="my-1 me-4">
              Navigate To:
              <br />  > Click the "Status" tab
              <br />  > Click the "Get Status" button
              <br />  > Manually adjust the status if necessary
              <br />  > Copy the attendance status
            </code>
        </ul>
      
      `,
    },
    {
      header: "Update Bootcamp",
      body: `
        <ul>
          <li>Update
            <a className="link-color" href="https://idp.bootcampspot.com/ui/" role="button" target="_blank">
              Bootcamp
            </a>
          </li>
          <code className="my-1 me-4">
              Navigate To:
              <br />  > Attendance Menu
              <br />  > Open Chrome Inpector
              <br />  > Open the "Set Attendance Status" Script
              <br />  > Paste the attendance status array into the code
              <br />  > Execute "Set Attendance Status" Script
              <br />
              <br />
              Save Attendance:
              <br />  > Execute "Print Student List" Script to double check attendance
              <br />  > Click the Bootcamp "Save Attendance"
            </code>
        </ul>
      
      `,
    },
    {
      header: "Notes",
      body: `
        <ul className="m-0">
          <li>All data is secured in a backend database.</li>
          <li>All data is set to expire/delete after a short period of time.</li>
          <li>Data will not be shared or sold for any purpose.</li>
        </ul>

      `,
    }
  ];

  const code = [
    {
      header: `Select Student List`,
      body: `
        <code>
          // STEP #1: SELECT STUDENT LIST
          <br />// BEFORE RUNNING, SELECT THE 1ST STUDENT ELEMENT (OR 
          <br />// ... SCRIPT WILL FAIL)// BEFORE RUNNING, SELECT THE 1ST 
          <br />// ... ROW ELEMENT (OR SCRIPT WILL FAIL)
          <br />// NECESSARY BECAUSE THE CONTENT IS INSIDE AN IFRAME
          <br />
          <br />// STUDENT LIST IS USED TO PRINT & COPY STUDENT LIST
          <br />const studentList = document.querySelectorAll(\`.nine a\`)
          <br />
          <br />// ATTENDANCE LIST IS USED TO SET ATTENDANCE
          <br />const attendanceList = document.querySelectorAll(\`.divider.text\`)
          <br />
          <br />// console.log(studentList);
          <br />// console.log(attendanceList);
          <br />console.log(studentList.length + " " + attendanceList.length)
        </code>
      `
    },
    {
      header: `Print Student List`,
      body: `
        <code>
          // STEP #2 PRINT STUDENT LIST WITH ATTENDANCE
          <br />
          <br />clear();
          <br />
          <br />//CREATE CONSOLE.LOG STYLE
          <br />const styleNotPresent = [
          <br />  'color: green',
          <br />  'background: yellow',
          <br /> 'font-size: 14px',
          <br />].join(';'); // 2. Concatenate the individual array item and concatenate them into a string separated by a semi-colon (;)
          <br />
          <br />const stylePresent = [
          <br />  'color: red',
          <br />  // 'background: Blue',
          <br />].join(';'); // 2. Concatenate the individual array item and concatenate them into <br />a string separated by a semi-colon (;)
          <br />//source: https://www.samanthaming.com/tidbits/40-colorful-console-message/
          <br />
          <br />// PRINT STUDENT LIST WITH ATTENDANCE
          <br />if (studentList.length === attendanceList.length) {
          <br />  for (let i = 0; i &lt; studentList.length; i++) {
          <br />    attendanceList[i].innerText !== "Present" ? 
          <br />    console.log((i + 1) + " => " + \`%c$\{studentList[i].textContent}\` + " => " + attendanceList[i].textContent, styleNotPresent : console.log((i + 1) + " => " + \`%c$\{studentList[i].textContent}\` + " => " + attendanceList[i].textContent, stylePresent)
          <br />
          <br />  }
          <br />} else {
          <br />  console.log('ERROR PRINTING LIST - ARRAYS NOT SAME LENGTH');
          <br />};
        </code>
      `
    },
    {
      header: `Export Student List`,
      body: `
        <code>
          // STEP 3: EXPORT STUDENTS (to CSV)
          <br />
          <br />function downloadCSV(data, filename) {
          <br />  const csvContent = "data:text/csv;charset=utf-8," + data.map(row => \`"$\{row}"\`).join("\n");
          <br />
          <br />  const encodedUri = encodeURI(csvContent);
          <br />  const link = document.createElement("a");
          <br />  link.setAttribute("href", encodedUri);
          <br />  link.setAttribute("download", filename);
          <br />  document.body.appendChild(link);
          <br />  link.click();
          <br />  document.body.removeChild(link);
          <br />}
          <br />
          <br />  // Export to CSV with column header "Name"
          <br />function exportArrayToCSV(filename = '') {
          <br />  // Example data (array of names)
          <br />
          <br />  // Convert NodeList to array
          <br />  let students = [];
          <br />  for (let i = 0; i &lt; studentList.length; i++) {
          <br />    students.push(studentList[i].textContent);
          <br />};
          <br />
          <br />  console.log(studentList); // NODE LIST
          <br />   console.log(students); // ARRAY
          <br />
          <br />  // Insert column header
          <br />  students.unshift(['name']);
          <br />
          <br />  // Specify file name
          <br />  filename = filename ? filename : \`student_roster_$\{formatDateToCustomFormat()}.csv\`;
          <br />
          <br />  // Download CSV
          <br />  downloadCSV(students, filename);
          <br />}
          <br />
          <br />function formatDateToCustomFormat() {
          <br />  const date = new Date();
          <br />
          <br />  // Get individual date components
          <br />  const month = date.getMonth() + 1; // Month is zero-based, so add 1
          <br />  const day = date.getDate();
          <br />  const year = date.getFullYear();
          <br />  const hours = date.getHours();
          <br />  const minutes = date.getMinutes();
          <br />  const seconds = date.getSeconds();
          <br />  const timezone = date.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2];
          <br />
          <br />  // Pad single-digit values with leading zeros
          <br />  const formattedMonth = month.toString().padStart(2, '0');
          <br />  const formattedDay = day.toString().padStart(2, '0');
          <br />  const formattedHours = hours.toString().padStart(2, '0');
          <br />  const formattedMinutes = minutes.toString().padStart(2, '0');
          <br />  const formattedSeconds = seconds.toString().padStart(2, '0');
          <br />
          <br />  // Construct the formatted date string
          <br />  const formattedDate = \`$\{formattedMonth}-$\{formattedDay}-$\{year}_$\{formattedHours}:$\{formattedMinutes}:$\{formattedSeconds}_$\{timezone}\`;
          <br />
          <br />  return formattedDate;
          <br />}
          <br />
          <br />// DOWNLOAD TO CSV
          <br />exportArrayToCSV(\`student_roster_$\{formatDateToCustomFormat()}.csv\`);
        </code>
      `
    },
    {
      header: `Set Attendance Status`,
      body: `
        <code>
          //STEP 4: SET ATTENDANCE STATUS
          <br />
          <br />// REPLACE THE ARRAY BELOW WITH THE MOST 
          <br />// ... RECENT ARRAY TO POPULATE ATTENDANCE STATUS
          <br />let statusData = 
          <br />  ['Present', 'Present', 'Present', 'Present', 'Present', 'Present', 'Present', 'Present', 'Absent', 'Present', 'Present', 'Present', 'Present', 'Present', 'Present', 'Present', 'Present'];
          <br />
          <br />// CHECKS TO BE SURE THE STUDENT LIST & ATTENDANCE LIST ARE THE SAME LENGTH
          <br />if (studentList.length === attendanceList.length) {
          <br />  const attendanceDropdowns = document.querySelectorAll('.ui.selection.dropdown');
          <br />
          <br />  attendanceDropdowns.forEach((dropdown, index) => {
          <br />    const preselected = dropdown.querySelector('.divider.text').textContent;
          <br />    console.log('preselected= ' + preselected);
          <br />
          <br />// ITERATE THROUGH THE LIST OF DROPDOWNS; POPULATE statusData
          <br />    if (preselected !== "Absent - Excused") {
          <br />      const menu = dropdown.querySelector('.menu');
          <br />      console.log('menu= ' + menu);
          <br />      const presentOption = [...menu.querySelectorAll('.item')].find(item => item.    innerText === statusData[index]);
          <br />
          <br />      if (presentOption) {
          <br />        presentOption.click();
          <br />      };
          <br />    };
          <br />  });
          <br />} else {
          <br />  console.log("ERROR CHANGING ATTENDANCE - ARRAYS NOT SAME LENGTH");
          <br />};
        </code>
      `
    },
    {
      header: `Video Demo`,
      body: `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Wta_kxh27aU"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `
    }
  ]

  function handleCopyClick(event, index) {
    event.stopPropagation(); // prevent accordian from opening when copy button clicked

    // Get the content from the Accordion.Body using the ref
    const content = bodyRefs.current[index].innerText; // or use `innerHTML` if needed

    // Copy the content to the clipboard
    navigator.clipboard.writeText(content).then(
      () => {
        console.log('Content copied to clipboard');
        setCopiedIndex(index); // Update the state to reflect the copied icon
      },
      (err) => {
        console.error('Failed to copy content: ', err);
      }
    );

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  }

  return (
    <Card className='attendance-card'>

      {/* SECTION INSTRUCTIONS */}
      <Card className="custom-card">
        <Card.Header>Instructions</Card.Header>
        <Card.Body>
          <Accordion>
            {instructions?.map(({ header, body }, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>

      {/*SECTION CHROME SCRIPTS CODE LIBRARY */}
      <Card className="custom-card">
        <Card.Header>
          Library - Chrome Scripts
        </Card.Header>
        <Card.Body>
          <Accordion>
            {code?.map(({ header, body }, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                  <span className="header-title">{header}</span>
                  <span>
                    {header !== "Video Demo" &&
                      <i
                        id='copy-attendance-status-button'
                        className={`
                          bi 
                          ${copiedIndex === index ? 'bi-clipboard-check' : 'bi-copy'} 
                          ${copiedIndex === index ? 'copy-code-color-green' : 'inherit'}
                          copy-code-button
                        `}
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        title='Copy to clipboard'
                        onClick={(event) => handleCopyClick(event, index)}
                      ></i>
                    }
                  </span>
                </Accordion.Header>
                <Accordion.Body ref={(el) => (bodyRefs.current[index] = el)}>
                  <div
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>

    </Card>
  )
}

export default AttendanceTabs
