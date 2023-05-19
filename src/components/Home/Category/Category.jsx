import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "./Category.css";

const Category = () => {
  // const { id } = useParams();
  const categoryDetails = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-6xl font-bold text-rose-600 mb-10 mt-10">
        Here some of your favourite Toy
      </h2>
      {categoryDetails.map((category) => (
        <div key={category._id}>
          <div className="float-left category-container ">
            <img
              // className="category-img"
              className="category-img h-80 w-80"
              src={category.picture}
              alt=""
            />
            <h1 className="text-2xl font-bold text-rose-900">
              {category.toy_name}
            </h1>
            <p className="text-red-600 font-bold">
              <span className="text-sky-900 font-bold">Price:</span> $
              {category.price}
            </p>
            <p className="text-red-600 font-bold">
              <span className="text-sky-900 font-bold">
                <Rating
                  style={{ maxWidth: 80 }}
                  value={Math.round(category.ratings || 0)}
                  readOnly
                />
              </span>{" "}
              {category.ratings}
            </p>
            <Link to={`/toydetails/${category._id}`}>
              <button className="btn btn-outline btn-secondary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
