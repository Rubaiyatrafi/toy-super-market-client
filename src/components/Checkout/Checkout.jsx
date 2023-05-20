import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const toy = useLoaderData();
  const {
    name,
    photo,
    seller,
    email,
    category,
    quantity,
    price,
    ratings,
    description,
  } = toy;
  return (
    <div className="toy-container">
      <div className="flex justify-center">
        <img className="text-3xl h-96" src={photo} alt="" />
      </div>
      <div className="p-10 space-y-5 text-center">
        <h1 className="text-4xl font-bold text-rose-900">{name}</h1>
        <p className="text-sky-900  font-bold text-xl">
          <span className="font-bold text-stone-600">Toy Category:</span>{" "}
          {category}
        </p>
        <p className="text-sky-900  font-bold text-xl">
          <span className="font-bold text-stone-600">Seller Name:</span>{" "}
          {seller}
        </p>
        <p className="text-sky-900  font-bold text-xl">
          <span className="font-bold text-stone-600">Seller email:</span>{" "}
          {email}
        </p>

        <p className="text-red-600 font-bold text-xl">
          <span className="text-sky-900 font-bold">Price:</span> ${price}
        </p>
        <p className="text-red-600 font-bold text-xl">
          <span className="text-sky-900 font-bold">Availbale Quantity: </span>
          {quantity}
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

export default Checkout;
