import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.tsx";

export const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(AuthContext)!;

  function handleForm(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const result = await api.post("auth/login", formdata);
      setUser(result.data.user);
      navigate("/dashboard");
      console.log("login success");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form action="" method="post" onClick={handleSubmit}>
          <input
            name="email"
            type="email"
            value={formdata.email}
            onChange={handleForm}
            placeholder="Enter email"
          />

          <input
            name="password"
            type="password"
            value={formdata.password}
            onChange={handleForm}
            placeholder="Enter password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
