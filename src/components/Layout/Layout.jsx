import "./Layout.css";
import  Nav  from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Category from "../../pages/Category";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo/>
        <Nav />
      </header>
      <aside>
        <Category/>

        <CategoryList/>
      </aside>
      <main>{props.children}</main>
      <footer>
        FOOTER
      </footer>
    </div>
  );
}
