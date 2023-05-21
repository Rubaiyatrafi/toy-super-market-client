import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvier";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const newToys = {
      name,
      photo,
      seller,
      email,
      category,
      quantity,
      price,
      ratings,
      description,
    };
    console.log(newToys);
    fetch("https://toy-market-server-wine.vercel.app/toystore", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    form.reset();
  };

  return (
    <div className="bg-[#add0e4] p-24 mt-10 mb-10 rounded-md">
      <h2 className="text-5xl font-extrabold text-center mb-6 text-rose-700">
        Add a Toy
      </h2>
      <hr />
      <p className=" text-center text-stone-500 font-semibold mb-10 mt-10">
        Here you can add your favourite toy. Just read our terms & condition
        about this adding policy. We are the most highly online store keeper for
        Kids Toy that make your Kids free & happy
      </p>
      <hr />
      <hr />

      <form onSubmit={handleAddToy}>
        <div className="flex mb-8 mt-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Toy name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Toy image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8 mt-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seller"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered w-full"
                value={user.email}
                readOnly
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ratings"
                placeholder="Ratings"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add A Toy"
          className="btn btn-primary btn-outline btn-block mt-10"
        />
      </form>
    </div>
  );
};

export default AddAToy;
