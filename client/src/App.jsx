import { Outlet } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeNav from "./components/homeNav/homeNav.jsx";

function App() {
  return (
    <>
      <HomeNav />
      <Outlet />
    </>
  );
}

export default App;
