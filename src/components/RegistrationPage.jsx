import { useNavigate } from "react-router-dom";
import { register } from "../api";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate("/");
  const [error, setError] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await register(firstname, lastname, email, password);

    console.log("data", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
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
          Firstname:{" "}
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
        </label>
        <label>
          Lastname:{" "}
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></input>
        </label>
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