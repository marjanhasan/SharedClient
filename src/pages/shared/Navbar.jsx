import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-cyan-100 ">
      <div className="flex items-center justify-between relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* logo section  */}
        <Link to="/" className="">
          <span className="ml-2 text-2xl font-bold tracking-wide txt-color">
            yourMED
          </span>
        </Link>
        {/* nav section  */}
        <ul className="items-center hidden space-x-8 lg:flex font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructor"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Instructor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Classes
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Dashboard
              </NavLink>
            ) : (
              ""
            )}
          </li>
        </ul>
        {/* button section  */}

        {user ? (
          <div className="flex">
            <button
              onClick={handleLogOut}
              className="inline-flex items-center h-12 px-6 mb-3 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-800 transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700 hidden lg:flex"
            >
              Log Out
            </button>
            <img
              className="border-2 rounded-full h-12 w-12"
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <Link to="login">
            <button className="inline-flex items-center h-12 px-6 mb-3 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-800 transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700 hidden lg:flex">
              Log In
            </button>
          </Link>
        )}
        {/* mobile navbar section  */}
        <div className="lg:hidden">
          {/* dropdown open button  */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBeer className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-cyan-50 border rounded shadow-sm">
                {/* logo & button section  */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide txt-color">
                        yourMED
                      </span>
                    </Link>
                  </div>
                  {/* dropdown menu close button  */}
                  <div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaBeer className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* mobile nav items section  */}
                <nav className="ml-2">
                  <ul className="space-y-4 font-medium">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="appointment"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Appointment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    {user ? (
                      <button onClick={handleLogOut} className="">
                        Log Out
                      </button>
                    ) : (
                      <li>
                        <NavLink
                          to="login"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Login
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
