import { Link } from "react-router-dom";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[700px] mt-10 mb-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />

        <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Kids</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
              There are many Toy shop in your side but we guarantee that we are
              the best seller all over the world
            </p>
            <div>
              <Link to="/alltoys">
                <button className="btn btn-outline btn-secondary">
                  Latest Toys
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 bg-red-600">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Kids</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
              There are many Toy shop in your side but we guarantee that we are
              the best seller all over the world
            </p>
            <div>
              <Link to="/alltoys">
                <button className="btn btn-outline btn-secondary">
                  Latest Toys
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5 bg-red-600">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Kids</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
              There are many Toy shop in your side but we guarantee that we are
              the best seller all over the world
            </p>
            <div>
              <Link to="/alltoys">
                <button className="btn btn-outline btn-secondary">
                  Latest Toys
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5 bg-red-600">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
