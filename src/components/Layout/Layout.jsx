import "./Layout.css";
import  Nav  from "../Nav/Nav";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <aside>
        ASIDE
      </aside>
      <main>{props.children}</main>
    </div>
  );
}
