import { useState } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categoty/" + category.path}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoruList">
      <ul>{output}</ul>
    </div>
  );
}
