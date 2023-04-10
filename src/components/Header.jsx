import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white-100 flex items-center justify-between px-5 py-5">
     
      <Link to='/' className="inline-flex items-center">
        <span className="text-2xl font-bold ml-5">Hey dev.</span>
      </Link>
      
      <ul className="lg:flex hidden space-x-8 items-center text-lg font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default:"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default:"
            }
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default:"
            }
          >
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default:"
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
      {/* mobile device responsive */}
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-5 text-gray-600" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                      Hey dev.
                    </span>
                  </Link>
                </div>
          
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link to="/" className="default">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/statistics"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Applied Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
                <button className="btn-main mt-3">Start Applying</button>
              </nav>
            </div>
          </div>
        )}
      </div>
      <div>
        <button className="btn-main">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
