import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ShopCategory.css";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-center text-6xl font-bold text-rose-600 mb-10">
        Shop by Your Favourite Category
      </h1>
      {/* {categories.map((category) => (
        <div key={category.id}>
          <div>
            <NavLink>{category.category_name}</NavLink>
          </div>
        </div>
      ))} */}
      {categories.map((category) => (
        <div key={category.id}>
          <div>
            <NavLink>{category.category_name}</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCategory;
