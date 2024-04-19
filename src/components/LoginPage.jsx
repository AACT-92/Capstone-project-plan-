import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

export default function Login() {
  const navigate = useNavigate("/");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await login(email, password);
  

    if (data.token) {
      localStorage.setItem("token", data.token)
      // navigate to homepage if login is successful
      navigate("/");
    } else {
      setError(data.message);
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );

}
