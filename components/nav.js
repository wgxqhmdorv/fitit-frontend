import Link from "./link";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("/");

  return (
    <nav className="flex-grow">
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
