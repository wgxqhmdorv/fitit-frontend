const InputForm = ({ name, type, value, onChange, placeholder }) => {
  return (
    <>
      <label className="flex justify-center">{name}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2"
      />
    </>
  );
};

export default InputForm;
