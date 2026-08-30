import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  useScrollToTop();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

/** BrowserRouter keeps the scroll offset across navigations; this resets it. */
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default App;
