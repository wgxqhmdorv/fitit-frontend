import Link from "next/link";

const LinkButton = ({ href, active, setActive }) => {
  const url = href ? href : "/";
  const componentName = href ? href[0].toUpperCase() + href.slice(1) : "Home";

  return (
    <Link href={url}>
      <a
        onClick={() => setActive(() => url)}
        className={`block p-2 pl-12 my-2 border-l-4 ${
          active === url
            ? "border-primary text-black"
            : "text-temp border-white hover:border-gray-400"
        }`}
      >
        {componentName}
      </a>
    </Link>
  );
};

export default LinkButton;
