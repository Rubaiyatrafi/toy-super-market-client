import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Toys = ({ toys }) => {
  const { _id, name, photo, seller, category, quantity, price } = toys;
  return (
    <div>
      <div className="card card-side  shadow-xl p-2">
        <figure>
          <img className=" w-52 h-52 rounded-2xl" src={photo} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className=" text-3xl text-sky-800 font-extrabold">{name}</h2>
          <p className=" text-xl font-bold">
            Category: <span className=" text-red-800 text-2xl">{category}</span>
          </p>
        </div>
        <div className="card-body">
          <p className=" text-xl font-bold">Seller Name: {seller}</p>
          <p className=" text-lg font-bold">
            Price: <span className=" text-red-500 font-extrabold">{price}</span>
          </p>
          <p className=" text-lg font-bold">Available Quantity: {quantity}</p>
          <div className="card-actions justify-end">
            <Link to={`/toystore/${_id}`}>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;
