import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await axios.post("http://localhost:5000/api/auth/register",{username, password, email})

    console.log("Register Data:", data);

    // Reset states
    setUsername("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <main className="text-black min-h-[calc(100vh-73px)] bg-orange-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-orange-500 p-12 text-white lg:flex lg:flex-col lg:justify-center">
          <span className="w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Join Foodie
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Your favorite food, one account away.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-orange-50">
            Create your account and start exploring delicious meals
            from our menu.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000&q=80"
              alt="Fresh food"
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
                Create an Account
              </h2>

              <p className="mt-2 text-gray-500">
                Sign up to start ordering your favorite food.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

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
                  placeholder="Create a password"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Create Account
              </button>

            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-orange-500 hover:text-orange-600"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;