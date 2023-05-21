import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const Toy = ({ toy }) => {
  const { _id, name, photo, price, quantity, description } = toy;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="toy-container">
          <div className="flex justify-center">
            <img className="text-3xl h-96" src={photo} alt="" />
          </div>
          <div className="p-10 space-y-5 text-center">
            <h1 className="text-4xl font-bold text-rose-900">{name}</h1>
            <p className="text-red-600 font-bold text-xl">
              <span className="text-sky-900 font-bold">Price:</span> ${price}
            </p>
            <p className="text-sky-900 font-bold text-xl">
              Available quantity:{" "}
              <span className=" text-stone-600">{quantity}</span>
            </p>
            <div>
              <p className="text-sky-900 font-bold text-xl">
                <span className="text-sky-900 font-bold">Description: </span>

                <span className="text-stone-600">{description}</span>
              </p>
            </div>
            <div className="flex justify-evenly m-10">
              <Link to={`/toys/${_id}`}>
                <button className="btn btn-outline btn-primary">Update</button>
              </Link>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn btn-outline btn-secondary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
