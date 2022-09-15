import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <div className="container-fluid border-bottom border-warning bg-primary">
        <NavLink
          to="/"
          className="d-flex align-items-center justify-content-between"
        >
          <img
            className="img-fluid"
            src="./images/Logo.png"
            alt="Site Icon"
            style={{ height: "40px" }}
          />

          <img
            className="border-start border-warning img-fluid"
            src="./images/talk.png"
            alt="Site Icon"
            style={{ height: "40px" }}
          />
        </NavLink>
      </div>

      <Navbar expand="lg" className=" text-center bg-primary">
        <Container>
          <Navbar.Toggle>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-light"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-light" to="/">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-light" to="/">
                  MEMBERSHIP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-light" to="/">
                  INVESTMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-light" to="/">
                  LOANS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-light" to="/">
                  FORMS
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
