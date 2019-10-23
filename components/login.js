import { from } from "rxjs/observable/from";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log(username);
    console.log(pass);
    setUsername("");
    setPass("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex justify-center w-full">
      <div className="flex flex-col">
        <label className="flex justify-center">Username</label>
        <input
          type="text"
          value={username}
          onChange={() => setUsername(event.target.value)}
          placeholder="Enter your username"
          className="border-2"
        />
        <label className="flex justify-center">Password</label>
        <input
          type="password"
          value={pass}
          onChange={() => setPass(event.target.value)}
          placeholder="Enter your password"
          className="border-2"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="block bg-primary rounded py-2 px-10 mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
