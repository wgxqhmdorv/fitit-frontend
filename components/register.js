import { useState } from "react";
import InputForm from "./inputForm";
import Button from "./button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");
  const errors = {
    username: "This username is not valid",
    email: "This email is not valid",
    pass: "Password need to have at least 8 characters",
    passValidate: "Your passwords does not match",
    blank: ""
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    ["Username", "Email", "Password", "Confirm your password"].map(ele => {
      document.getElementById(ele).focus();
      document.getElementById(ele).blur();
    })
    if (validate()) {
      console.log(username);
      console.log(email);
      console.log(pass);
      setUsername("");
      setEmail("");
      setPass("");
      setPassConfirmation("");
    } else {
      if (!validateUsername()) {
        setUsername("");
      }
      if (!validateEmail()) {
        setEmail("");
      }
      if (!validatePasswordLen() || !validatePasswords()) {
        setPass("");
        setPassConfirmation("");
      }
    }
  };

  const validatePasswords = () => {
    if (pass !== passConfirmation || (!pass || !passConfirmation)) return false;
    else return true;
  };

  const validatePasswordLen = () => {
    if (pass.length < 8 || !pass) return false;
    else return true;
  };

  const validateUsername = () => {
    if (!username) return false;
    else return true;
  };

  const validateEmail = () => {
    if (!email) return false;
    else return true;
  };

  const validate = () => {
    if (
      validateUsername() &&
      validateEmail() &&
      validatePasswordLen() & validatePasswords()
    )
      return true;
    else return false;
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      id="register-form"
      className="flex justify-center w-full"
    >
      <div className="flex flex-col w-full" id="register-form-div">
        <InputForm
          name="Username"
          type="text"
          value={username}
          onChange={() => setUsername(event.target.value)}
          validate={validateUsername}
          errorMsg={errors.username}
          placeholder="Enter your username"
        />
        <InputForm
          name="Email"
          type="text"
          value={email}
          onChange={() => setEmail(event.target.value)}
          validate={validateEmail}
          errorMsg={errors.email}
          placeholder="Enter your email"
        />
        <InputForm
          name="Password"
          type="password"
          value={pass}
          onChange={() => setPass(event.target.value)}
          validate={validatePasswordLen}
          errorMsg={errors.pass}
          placeholder="Enter your password"
        />
        <InputForm
          name="Confirm your password"
          type="password"
          value={passConfirmation}
          onChange={() => setPassConfirmation(event.target.value)}
          validate={validatePasswords}
          errorMsg={errors.passValidate}
          placeholder="Enter your password"
        />
        <Button type="submit" name="Register" isEnabled={false} />
      </div>
    </form>
  );
};

export default Register;
