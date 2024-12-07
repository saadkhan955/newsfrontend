import React from "react";
import MainMenu from "./MainMenu";

export default function NavBar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
        <div
          className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            <MainMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}
