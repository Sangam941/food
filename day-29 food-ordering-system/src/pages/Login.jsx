import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContextProvider } from "../context/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(AuthContextProvider)

  const handleSubmit = async (e) => {
    e.preventDefault();

     login(email, password)

    setEmail("");
    setPassword("");

    navigate("/");
  };

  return (
    <main className="text-black min-h-[calc(100vh-73px)] bg-orange-50 px-6 py-12 pt-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-orange-500 p-12 text-white lg:flex lg:flex-col lg:justify-center">
          <span className="w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Welcome Back
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Good food is waiting for you.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-orange-50">
            Login to continue ordering your favorite meals and discover
            something delicious today.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80"
              alt="Delicious food"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Form */}
        <div className="p-8 md:p-12">
          <div className="mx-auto max-w-md">
            <div className="text-center">
              <p className="font-semibold text-orange-500">
                Foodie
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Welcome Back!
              </h2>

              <p className="mt-2 text-gray-500">
                Login to your account to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-orange-500 hover:text-orange-600"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;