import Nav from "./nav";
import { useState } from "react";

const withLayout = Page => {
  const Layout = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const handleNavbarChange = () => setNavbarVisible(!navbarVisible);

    return (
      <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
        <div className="flex flex-row lg:flex-col bg-white border-b-2 lg:border-r-2 lg:border-b-0 border-gray-200 pr-4">
          <img
            src="/logo.png"
            alt="FitIT logotype"
            className="mr-auto p-2 h-16 lg:h-24 lg:m-auto"
          />
          <button className="p-4 lg:hidden" onClick={handleNavbarChange}>
            =
          </button>
          <Nav isVisible={navbarVisible} />
        </div>
        <div className="flex-grow">
          <Page />
        </div>
      </div>
    );
  };

  return Layout;
};

export default withLayout;
