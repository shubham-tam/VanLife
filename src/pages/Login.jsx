import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { loginUser } from "../../api";

export const loginLoader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const message = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginFormData).then((data) => console.log(data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red"> {message} </h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
