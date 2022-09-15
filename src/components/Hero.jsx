import React from "react";
import { Icon } from "@iconify/react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="d-block bgx text-light p-5 p-lg-0 pt-lg-5 text-center">
      <Container>
        <div
          className="d-flex align-items-center justify-content-between text-sm-start"
          style={{ height: "500px" }}
        >
          <div className="showcase-banner">
            <h1 className="fw-bold text-primary">
              YOUR FINANCIAL REVOLUTION IS HERE.
            </h1>
            <p className="text-primary">
              Growing Virtual Assets Like Never Before.
            </p>
            <NavLink
              className="btn btn-warning btn-xl text-light fw-bold my-2"
              to="/register"
            >
              JOIN NOW
            </NavLink>
            <NavLink
              className="btn btn-light btn-xl text-warning fw-bold my-2"
              to="/login"
            >
              <Icon icon="fa6-solid:arrow-right-to-bracket" />
              LOGIN
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
