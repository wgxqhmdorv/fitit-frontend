import Link from "./link";
import { useState } from "react";

const Nav = ({ isVisible }) => {
  const [active, setActive] = useState("/");

  return (
    <nav
      style={{ height: "calc(100vh - 4rem - 2px)" }}
      className={`${
        isVisible ? "block" : "hidden"
      } ${"absolute bg-white bottom-0 "}lg:flex-grow lg:block lg:static`}
    >
      <Link active={active} setActive={setActive} />
      <Link href="list" active={active} setActive={setActive} />
      <Link href="login" active={active} setActive={setActive} />
      <Link href="logout" active={active} setActive={setActive} />
      <Link href="statistics" active={active} setActive={setActive} />
      <Link href="users" active={active} setActive={setActive} />
    </nav>
  );
};

export default Nav;
