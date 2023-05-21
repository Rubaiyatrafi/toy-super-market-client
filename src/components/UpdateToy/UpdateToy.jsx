import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const toyUpdate = useLoaderData();
  // console.log(toyUpdate);
  const { _id, name, photo, price, quantity, description } = toyUpdate;

  const handleUpdateToy = () => {};
  return (
    <div>
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
                // value={user.email}
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
          value="Update A Toy"
          className="btn btn-primary btn-outline btn-block mt-10"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
