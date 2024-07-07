import { Outlet } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
