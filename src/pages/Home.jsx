
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-65px)]">

      {/* Hero Section */}
      <section className="text-center px-5 pt-16 sm:pt-20 pb-16">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#211d31] max-w-3xl mx-auto leading-tight">
          Organise your day, one task at a time
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mt-8">
          Add tasks, track their status and keep everything in one calm,
          simple place.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">

          <Link
            to="/signup"
            className="px-7 py-3 bg-[#7838ed] hover:bg-purple-700 text-white font-semibold rounded-xl transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-7 py-3 border border-[#7838ed] text-[#7838ed] hover:bg-purple-50 font-semibold rounded-xl transition"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-5 pb-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#211d31] mb-8">
          Everything you need
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="bg-white border border-purple-100 rounded-2xl p-6 hover:shadow-md transition">

            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
              1
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Add tasks fast
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Give each task a title, a description and a status in seconds.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white border border-purple-100 rounded-2xl p-6 hover:shadow-md transition">

            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
              2
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Track progress
            </h3>

            <p className="text-gray-600 leading-relaxed">
              See what is Pending, In Progress or Completed at a glance.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white border border-purple-100 rounded-2xl p-6 hover:shadow-md transition">

            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
              3
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Stay in control
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Edit or delete any task whenever your plans change.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 py-6 text-center text-gray-600">
        © Task Manager
      </footer>

    </div>
  );
};

export default Home;
