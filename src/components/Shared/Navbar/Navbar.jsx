import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvier";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="navbar md:flex-row  justify-between flex-col mt-10">
        <div className="flex flex-col gap-3">
          <img className="w-12 rounded-lg" src={logo} alt="" />
          <h2 className="ml-2 text-4xl font-bold font-serif text-blue-950 title-name">
            <span className="text-rose-700">Toy</span> Store
          </h2>
        </div>
        <div className="text-1xl font-bold font-sans  md:flex-row flex-col link-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/alltoys">All Toys</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>

          {user ? (
            <>
              <span className="navbar md:flex-row  justify-between flex-col ">
                <NavLink to="/addatoy">Add a Toy</NavLink>
                <NavLink to="/mytoys">My Toys</NavLink>
                {/* <h2>{user.email}</h2> */}
                <button onClick={handleSignout}>
                  <NavLink>Signout</NavLink>
                </button>
              </span>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
