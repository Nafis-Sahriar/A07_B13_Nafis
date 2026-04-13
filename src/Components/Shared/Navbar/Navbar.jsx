
import { CiHome } from "react-icons/ci";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">

      <div className="w-[90%] mx-auto">

        {/* MOBILE VIEW */}
        <div className="flex flex-col items-center justify-center gap-3 md:hidden py-4">

          {/* Centered Title */}
          <div className="text-xl">
            <span className="font-bold">Keen</span>
            <span className="text-[#244D3F] font-bold">Keeper</span>
          </div>

          {/* Buttons Below */}
          <div className="flex flex-wrap justify-center gap-2">

            {/* NavLink gives us isActive automatically */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
              }
            >
              <CiHome /> Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
              }
            >
              <RiTimeLine /> Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
              }
            >
              <ImStatsDots /> Stats
            </NavLink>

          </div>
        </div>

        {/* DESKTOP / TABLET VIEW */}
        <div className="hidden md:flex items-center justify-between">

          {/* Left: Logo */}
          <div className="text-xl">
            <span className="font-bold text-black">Keen</span>
            <span className="text-[#244D3F] font-bold">Keeper</span>
          </div>

          {/* Right: Nav Buttons */}
          <div className="flex gap-2">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
              }
            >
              <CiHome /> Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
              }
            >
              <RiTimeLine /> Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
              }
            >
              <ImStatsDots /> Stats
            </NavLink>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;