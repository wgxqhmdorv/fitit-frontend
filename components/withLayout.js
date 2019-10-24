import Nav from "./nav";

const withLayout = Page => {
  return () => (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col bg-white border-r-2 border-gray-200 pr-4">
        <img
          src="/logo.png"
          alt="FitIT logotype"
          className="p-2 h-16 lg:h-24 m-auto "
        />
        <Nav />
      </div>
      <div className="flex-grow">
        <Page />
      </div>
    </div>
  );
};

export default withLayout;
