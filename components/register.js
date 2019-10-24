import { useState } from "react";
import InputForm from "./inputForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log(email);
    console.log(username);
    console.log(pass);
    setEmail("");
    setUsername("");
    setPass("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex justify-center w-full">
      <div className="flex flex-col">
        <InputForm
          name="Username"
          type="text"
          value={username}
          onChange={() => setUsername(event.target.value)}
          placeholder="Enter your username"
        />
        <InputForm
          name="Email"
          type="text"
          value={email}
          onChange={() => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <InputForm
          name="Password"
          type="password"
          value={pass}
          onChange={() => setPass(event.target.value)}
          placeholder="Enter your password"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="block bg-primary rounded py-2 px-10 mt-2"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;