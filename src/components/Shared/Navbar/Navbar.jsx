import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar md:flex-row  justify-between flex-col mt-10">
        <div className="flex flex-col gap-3">
          <img className="w-12 rounded-lg" src={logo} alt="" />
          <h2 className="ml-2 text-4xl font-bold font-serif text-blue-950 title-name">
            <span className="text-rose-700">Toy</span> Store
          </h2>
        </div>
        <div className="text-1xl font-bold font-serif  md:flex-row flex-col link-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/alltoys">All Toys</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/login">Login</NavLink>
          {/* {user ? (
            <>
              <h2>{user.displayname}</h2>
              <NavLink>
                <button onClick={handleLogout}>Sign Out</button>
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
