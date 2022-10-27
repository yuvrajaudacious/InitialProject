import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-dark
    "
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
                height="30"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link text-light" to="/">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/signup">
                  Team
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link text-light" to="">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <Link
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="/pro"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                class="rounded-circle"
                height="35"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
