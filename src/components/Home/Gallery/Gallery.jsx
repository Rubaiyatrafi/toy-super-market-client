import img1 from "../../../assets/images/wwe1.png";
import img2 from "../../../assets/images/guns1.png";
import img3 from "../../../assets/images/hero3.png";
import img4 from "../../../assets/images/hero5.png";
import img5 from "../../../assets/images/wwe2.png";
import img6 from "../../../assets/images/guns3.png";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="bg-slate-300 p-10 rounded-2xl">
      <h1 className="text-center text-4xl mb-10 font-bold font-sans text-red-600">
        Welcome to our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-3">
          <img className="gallery-img" src={img1} alt="" />
          <h2 className="text-lg font-semibold text-sky-900">
            WWE Action Figure
          </h2>
          <p className="font-bold text-rose-800">Price: $19.99</p>
          <p className="font-semibold text-stone-800">
            This WWE action figure features a popular superhero character with
            superpowers
          </p>
        </div>
        <div className="space-y-3">
          <img className="gallery-img" src={img2} alt="" />
          <h2 className="text-lg font-semibold text-sky-900">Top Gun</h2>
          <p className="font-bold text-rose-800">Price: $35.99</p>
          <p className="font-semibold text-stone-800">
            It is simulated firearm designed for recreational play typically
            used by children
          </p>
        </div>
        <div className="space-y-3">
          <img className="gallery-img" src={img3} alt="" />
          <h2 className="text-lg font-semibold text-sky-900">
            Superhero Action Figure
          </h2>
          <p className="font-bold text-rose-800">Price: $24.99</p>
          <p className="font-semibold text-stone-800">
            This action figure features a popular superhero character with
            superpowers
          </p>
        </div>
        <div className="space-y-3">
          <img className="gallery-img" src={img4} alt="" />
          <h2 className="text-lg font-semibold text-sky-900">
            Superhero Action Figure
          </h2>
          <p className="font-bold text-rose-800">Price: $18.99</p>
          <p className="font-semibold text-stone-800">
            This action figure features a popular superhero character with
            superpowers
          </p>
        </div>
        <div className="space-y-3">
          <img className="gallery-img" src={img5} alt="" />
          <h2 className="text-lg font-semibold text-sky-900">
            WWE Action Figure
          </h2>
          <p className="font-bold text-rose-800">Price: $29.99</p>
          <p className="font-semibold text-stone-800">
            This WWE action figure features a popular superhero character with
            superpowers
          </p>
        </div>
        <div className="space-y-3">
          <img className="gallery-img" src={img6} alt="" />
          <h2 className="text-lg font-semibold text-sky-900">Top Gun</h2>
          <p className="font-bold text-rose-800">Price: $65.99</p>
          <p className="font-semibold text-stone-800">
            It is simulated firearm designed for recreational play typically
            used by children
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
