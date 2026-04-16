import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold text-green-800">404 Error!</h1>
      <p className="text-lg text-gray-600">Page Not Found</p>

      <Link to="/">
        <div className="flex items-center justify-center">

            <button className="mt-4 px-4 py-2  bg-green-800 text-white rounded-md hover:bg-green-700">
                <span className="flex items-center justify-center gap-4"><FaArrowLeft />Go Back to Home</span>
            </button>

        </div>
      </Link>
    </div>
  );
};

export default NotFound;
