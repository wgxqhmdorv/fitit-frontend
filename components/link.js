import Link from "next/link";

const LinkButton = ({ href, active, setActive }) => {
  const url = href ? href : "/";
  const componentName = href ? href[0].toUpperCase() + href.slice(1) : "Home";

  return (
    <>
      <Link href={url}>
        <a onClick={() => setActive(() => url)}>{componentName}</a>
      </Link>
      <style jsx>{`
        a {
          display: block;
          padding: 0.5rem 0.5rem 0.5rem 3rem;
          margin: 0.5rem 0 0.5rem 0;
          border-left-width: 4px;
        }
      `}</style>
      <style jsx>{`
        a {
          border-color: ${url === active ? "#48BB78" : "white"};
          color: ${url === active ? "black" : "#A9A9A9"};
        }
        a:hover {
          border-color: ${url == active ? "#22543D" : "#cbd5e0"};
        }
      `}</style>
    </>
  );
};

export default LinkButton;
