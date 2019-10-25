import Nav from "./nav";
import { useState } from "react";

const withLayout = Page => {
  const Layout = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const handleNavbarChange = () => setNavbarVisible(!navbarVisible);

    return (
      <div className="pageContainer">
        <header>
          <img src="/logo.png" alt="FitIT logotype" />
          <button onClick={handleNavbarChange}>=</button>
          <Nav isVisible={navbarVisible} />
        </header>
        <div className="flex-grow">
          <Page />
        </div>

        <style jsx>{`
          .pageContainer {
            display: flex;
            flex-direction: column;
            height: 100vh;
            background-color: #f7fafc;
          }
          header {
            display: flex;
            flex-direction: row;
            background-color: white;
          }
          img {
            margin-right: auto;
            padding: 0.5rem;
            height: 4rem;
          }
          button {
            padding: 1rem;
          }
          .flex-grow {
            flex-grow: 1;
          }
          @media (min-width: 1024px) {
            .pageContainer {
              flex-direction: row;
            }
            header {
              position: relative;
              flex-direction: column;
            }
            header:before {
              content: "";
              position: absolute;
              right: 0;
              width: 2px;
              height: 100vh;
              background-color: #edf2f7;
            }
            img {
              height: 6rem;
              margin: auto;
            }
            button {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  };

  return Layout;
};

export default withLayout;
