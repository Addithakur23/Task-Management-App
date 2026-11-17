
import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
 console.log(user)
  const handleLogout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/logout`, {
        method: "POST",
        credentials: "include"
      });

      if (!res.ok) {
        console.log("Logout Failed");
        return;
      }

      setUser(null);
      navigate("/");
    } catch (err) {
      console.log("Logout Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7fc]">

      <nav className="flex justify-between items-center px-10 max-sm:px-5 py-4 bg-[#7838ed] text-white sticky top-0 z-50">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Task Manager
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold">

          <Link
            to="/"
            className="hover:bg-white/20 px-3 py-2 rounded-lg transition"
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition"
              >
                Dashboard
              </Link>

              {/* User Profile */}
              <div className="flex items-center gap-2">
                <div className="bg-white text-purple-700 rounded-full w-9 h-9 flex items-center justify-center font-bold">
                  {user?.Name?.charAt(0).toUpperCase()}
                </div>

                <span className="max-sm:hidden">
                  {user?.Name}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition"
              >
                SignUp
              </Link>

              <Link
                to="/login"
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition"
              >
                Login
              </Link>
            </>
          )}

        </div>
      </nav>

      <Outlet />

    </div>
  );
}

export default Navbar;
