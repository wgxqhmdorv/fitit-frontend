const Button = ({ type, name, isEnabled }) => {
  return (
    <div className="flex justify-end">
      <button
        type={type}
        className={
          isEnabled
            ? "bg-primary font-bold rounded py-2 px-10 mt-2 opacity-50 cursor-not-allowed"
            : "bg-primary font-bold rounded py-2 px-10 mt-2"
        }
        disabled={isEnabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
