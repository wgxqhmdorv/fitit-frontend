import Link from "./link";

export default () => (
  <nav className="flex-col w-32">
    <Link />
    <Link href="list" />
    <Link href="login" />
    <Link href="logout" />
    <Link href="statictics" />
    <Link href="users" />
  </nav>
);
