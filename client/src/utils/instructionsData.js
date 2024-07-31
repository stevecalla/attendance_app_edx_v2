export const instructionsData = [
  {
    header: "Summary",
    body: `
      <ul className="m-0">
        <li>Ensure Zoom name is similar to the roster name.</li>
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