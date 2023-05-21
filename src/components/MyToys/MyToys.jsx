import { useLoaderData } from "react-router-dom";
import Toy from "../Toy/Toy";

const MyToys = () => {
  const myToys = useLoaderData();

  return (
    <div>
      <div className="bg-[#f5d7f0] p-10 rounded-2xl mt-10 mb-10">
        <h1 className=" text-center text-5xl font-extrabold text-rose-700 mt-10 mb-10">
          My Toys
        </h1>
        <hr />
        <hr />
        <h1 className="text-center text-xl font-bold text-stone-700 mt-10 mb-10">
          These are Your added Toys given below. You can also update and delete
          your added toys.
        </h1>
      </div>
      {myToys.map((toy) => (
        <Toy key={toy._id} toy={toy}></Toy>
      ))}
    </div>
  );
};

export default MyToys;
