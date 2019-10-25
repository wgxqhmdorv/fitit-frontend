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
          position: relative;
          width: 100%;
          display: block;
          padding: 0 0.5rem 0 3rem;
          margin: 0.5rem 0 0.5rem 0;
          line-height: 2;
        }
        a:before {
          content: "";
          width: 4px;
          height: 2rem;
          right: -1px;
          position: absolute;
        }
      `}</style>
      <style jsx>{`
        a {
          color: ${url === active ? "black" : "#A9A9A9"};
        }
        a:before {
          background-color: ${url === active ? "#48BB78" : ""};
        }

        a:hover:before {
          background-color: ${url == active ? "#22543D" : "#cbd5e0"};
        }
      `}</style>
    </>
  );
};

export default LinkButton;
