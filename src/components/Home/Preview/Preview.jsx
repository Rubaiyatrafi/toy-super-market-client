import img from "../../../assets/images/preview.jpg";
const Preview = () => {
  return (
    <div className=" mt-52">
      <div className="sm:flex justify-between sm:grid-cols-1 grid p-10">
        <div className=" bg-[#d0e7f5] w-60 h-32 p-4 text-center rounded-lg">
          <h1 className=" text-2xl font-extrabold text-blue-900">
            Free Shipping
          </h1>
          <p className=" text-sm mt-3 font-semibold">
            We provide free of cost in offer
          </p>
        </div>
        <div className=" bg-[#f5ded8] w-60 h-32 p-4 text-center rounded-lg">
          <h1 className=" text-2xl font-extrabold text-blue-900">
            14 Days return
          </h1>
          <p className=" text-sm mt-3 font-semibold">
            We return your your product fast
          </p>
        </div>
        <div className=" bg-[#f8cdef] w-60 h-32 p-4 text-center rounded-lg">
          <h1 className=" text-2xl font-extrabold text-blue-900">
            24/7 Support
          </h1>
          <p className=" text-sm mt-3 font-semibold">We always in your side</p>
        </div>
      </div>
      <div>
        <div className="hero min-h-screen bg-[#eeebf5] p-10 mt-10 mb-10 rounded-xl">
          <div className="hero-content flex-col lg:flex-row w-full">
            <div className=" w-1/2">
              <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className=" w-1/2">
              <h1 className="text-5xl font-bold">
                New <span className=" text-red-600">Collection</span> of 2023
              </h1>
              <p className="py-6">
                The best toys engage a child senses, spark their imaginations
                and encourage them to interact with others. Parent tips on
                selecting toys.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
