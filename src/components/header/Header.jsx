import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div class="container-fluid d-none d-lg-block">
      <div class="row align-items-center bg-dark px-lg-5">
        <div class="col-lg-9">
          <nav class="navbar navbar-expand-sm bg-dark p-0">
            <ul class="navbar-nav ml-n2">
              <li class="nav-item border-right border-secondary">
                <a class="nav-link text-body small" href="#">
                  Monday, January 1, 2045
                </a>
              </li>
              <li class="nav-item border-right border-secondary">
                <a class="nav-link text-body small" href="#">
                  Advertise
                </a>
              </li>
              <li class="nav-item border-right border-secondary">
                <a class="nav-link text-body small" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body small" href="#">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3 text-right d-none d-md-block">
          <nav class="navbar navbar-expand-sm bg-dark p-0">
            <ul class="navbar-nav ml-auto mr-n2">
              <li class="nav-item">
                <a class="nav-link text-body" href="#">
                  <small>
                    <FontAwesomeIcon icon={faFacebook} />
                  </small>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">
                  <small>
                    <FontAwesomeIcon icon={faTwitter} />
                  </small>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">
                  <small>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </small>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">
                  <small>
                    <FontAwesomeIcon icon={faInstagram} />
                  </small>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">
                  <small>
                    <FontAwesomeIcon icon={faGooglePlus} />
                  </small>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-body" href="#">
                  <small>
                    <FontAwesomeIcon icon={faYoutube} />
                  </small>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row align-items-center bg-white py-3 px-lg-5">
        <div class="col-lg-4">
          <a href="index.html" class="navbar-brand p-0 d-none d-lg-block">
            <h1 class="m-0 display-4 text-uppercase text-primary">
              Biz<span class="text-secondary font-weight-normal">News</span>
            </h1>
          </a>
        </div>
        <div class="col-lg-8 text-center text-lg-right"></div>
      </div>
    </div>
  );
}

export default Header;
