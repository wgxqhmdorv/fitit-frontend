import { useState } from "react";

const InputForm = ({
  name,
  type,
  value,
  onChange,
  validate,
  errorMsg,
  placeholder
}) => {
  const [error, setError] = useState();
  return (
    <div>
      <label className="flex justify-start">{name}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={() => {
          setError(false);
          return onChange();
        }}
        onBlur={() => {
          if (validate()) setError(false);
          else setError(true);
        }}
        placeholder={placeholder}
        className={
          error
            ? "w-full border-2 border-red-600"
            : "w-full border-2 border-gray-400"
        }
      />
      {error ? (
        <label className="flex justify-start text-red-600">{errorMsg}</label>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputForm;
