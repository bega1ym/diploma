import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1> Hello world </h1>
      <p>This is my Diploma</p>


      <nav>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
      </nav>
    </div>
  );
}
