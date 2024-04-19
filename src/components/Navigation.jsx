import { Link } from "react-router-dom";
// import Link from react-router-dom

export default function Navigations() {
  // we need links to Account, Login, Register, Books(home), (sign out)

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/account">Account</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
