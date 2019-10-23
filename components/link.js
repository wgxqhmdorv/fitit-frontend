import Link from "next/link";

export default ({ href }) => {
  const url = href ? href : "/";
  const componentName = href ? href[0].toUpperCase() + href.slice(1) : "Home";

  return (
    <Link href={url}>
      <a className="block">{componentName}</a>
    </Link>
  );
};
