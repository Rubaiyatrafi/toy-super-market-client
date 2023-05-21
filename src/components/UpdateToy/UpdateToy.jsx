import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const toyUpdate = useLoaderData();
  console.log(toyUpdate);
  // const { _id, name, photo, price, quantity, description } = toyUpdate;
  return (
    <div>
      <h1>name: {name}</h1>
    </div>
  );
};

export default UpdateToy;
