import { useEffect, useState } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import {  getDocs, onSnapshot } from "firebase/firestore";
import { categoryCollection } from "../../firebase";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect (()=> {
    getDocs (categoryCollection)
    .then (snapshot => {
      const newCategories =[];

      snapshot.docs.forEach (doc => {
        const category = doc.data ();
        category.id = doc.id;

        newCategories.push(category);
      });
      setCategories(newCategories);
    })
  }, [])

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