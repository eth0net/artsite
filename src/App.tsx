import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
