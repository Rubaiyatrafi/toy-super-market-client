import { useLoaderData } from "react-router-dom";

const MyToys = () => {
  const myToys = useLoaderData();
  return (
    <div>
      <h1>My Toys : {myToys.length}</h1>
    </div>
  );
};

export default MyToys;
