import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 bg-neutral text-neutral-content shadow-lg">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline text-5xl pr-3" />
          <Link to="/" className="text-white text-xl font-bold align-middle ">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2 ">
          <div className="flex justify-end space-x-1">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn cursor-pointer font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn cursor-pointer font-bold"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
