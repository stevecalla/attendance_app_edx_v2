import { Outlet } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="main.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playwrite+CO:wght@100..400&display=swap" rel="stylesheet">
<link rel="icon" href="assets/images/favicon.ico" />
<title>Attendance edX</title> */}

import HomeNav from "./components/homeNav";

function App() {
  return (
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
      <HomeNav />
      <Outlet />
    </div>
  );
}

export default App;
