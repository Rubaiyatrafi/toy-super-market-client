import { useLoaderData } from "react-router-dom";
import "./ToyDetails.css";

const ToyDetails = () => {
  const toys = useLoaderData();
  const { picture, toy_name, description, price, ratings } = toys;

  // console.log(toys);
  return (
    <div className="toy-container">
      <div className="flex justify-center">
        <img className="text-3xl h-96" src={picture} alt="" />
      </div>
      <div className="p-10 space-y-5 text-center">
        <h1 className="text-4xl font-bold text-rose-900">{toy_name}</h1>
        <p className="text-red-600 font-bold text-xl">
          <span className="text-sky-900 font-bold">Price:</span> ${price}
        </p>
        <p className="text-sky-900 font-bold">{description}</p>
        <div>
          <p className="text-red-600 font-bold text-xl">
            <span className="text-sky-900 font-bold">Ratings: </span>

            {ratings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
