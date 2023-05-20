import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  //   const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // signIn(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200 login-container mt-10 mb-10 rounded-2xl">
      <div className="hero-content flex-col  gap-20">
        <div className=" w-full space-y-5">
          <h1 className="text-center">
            <span className=" text-5xl text-sky-900 font-semibold">
              Welcome <br /> to
            </span>{" "}
            <br />{" "}
            <span className=" text-6xl text-rose-700 font-bold">Toy Store</span>
          </h1>
          <p className=" text-xl font-semibold text-sky-900">
            Please Login to continue access
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-5xl font-bold text-center mb-10 text-rose-700">
              Login{" "}
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary font-bold text-1xl"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Toy Store?{" "}
              <Link className="text-orange-600 font-bold" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
