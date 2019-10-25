import Link from "./link";
import { useState } from "react";

const Nav = ({ isVisible }) => {
  const [active, setActive] = useState("/");

  return (
    <>
      <nav>
        <Link active={active} setActive={setActive} />
        <Link href="list" active={active} setActive={setActive} />
        <Link href="login" active={active} setActive={setActive} />
        <Link href="logout" active={active} setActive={setActive} />
        <Link href="statistics" active={active} setActive={setActive} />
        <Link href="users" active={active} setActive={setActive} />
      </nav>
      <style jsx>{`
        nav {
          height: calc(100vh - 4rem - 2px);
          position: absolute;
          background-color: white;
          bottom: 0;
        }
        @media (min-width: 1024px) {
          nav {
            position: static;
            display: block;
            flex-grow: 1;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 1023px) {
          nav {
            display: ${isVisible ? "block" : "none"};
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
