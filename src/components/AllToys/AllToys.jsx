import { useLoaderData } from "react-router-dom";
import Toys from "../Toys/Toys";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div className=" mt-10 mb-10 p-5 bg-[#e3f0f8] rounded-md">
      <h1 className=" text-center text-5xl font-bold text-rose-700 mb-10">
        All Toys
      </h1>
      <hr />
      <hr />
      <h3 className=" text-center text-xl font-semibold text-stone-600 mt-5 mb-10">
        Here You can see all Toys which are added by our seller. You can also
        see their details.
      </h3>
      <div className=" grid gap-3">
        {allToys.map((toys) => (
          <Toys key={toys._id} toys={toys}></Toys>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
