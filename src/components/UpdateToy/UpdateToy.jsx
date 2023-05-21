import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toyUpdate = useLoaderData();
  // console.log(toyUpdate);
  const {
    _id,
    name,
    photo,
    seller,
    email,
    category,
    quantity,
    price,
    ratings,
    description,
  } = toyUpdate;

  const handleUpdateToy = (event) => {
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

    const updateToys = {
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
    console.log(updateToys);
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    form.reset();
  };
  return (
    <div className="bg-[#add0e4]">
      <div className="bg-[#add0e4] p-24 mt-10 mb-10 rounded-md">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-rose-700">
          Update a Toy
        </h2>
        <hr />
        <p className=" text-center text-stone-500 font-semibold mb-10 mt-10">
          Here you can update your favourite toy. Just read our terms &
          condition about this adding policy. We are the most highly online
          store keeper for Kids Toy that make your Kids free & happy
        </p>
        <hr />
        <hr />
      </div>
      <form onSubmit={handleUpdateToy}>
        <div className="flex mb-8 mt-8 p-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8 mt-8 p-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seller"
                defaultValue={seller}
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
                defaultValue={email}
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8 p-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
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
                defaultValue={quantity}
                placeholder="Available quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="flex mb-8 p-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
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
                defaultValue={ratings}
                placeholder="Ratings"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full p-5">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Update A Toy"
          className="btn btn-primary btn-outline btn-block mt-10 mb-14"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
