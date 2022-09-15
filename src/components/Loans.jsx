import React from "react";
import { Icon } from "@iconify/react";

export default function Loans() {
  return (
    <section className="bg-light" id="loans">
      <div className="container-fluid d-flex">
        <div className="row position-relative">
          <div className="col-lg-12 col-md-auto bottom-0 d-none mx-auto pt-md-5 d-md-block">
            <img
              style={{ height: "500px", width: "500px" }}
              className="img-fluid"
              src="./images/businesswoman.png"
              alt="businesswoman"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 text-warning">
            <h4 className="text-center fw-bold text-Warning">
              <Icon
                inline
                icon="bx:world"
                width="200"
                height="150"
                style={{ marginLeft: "18rem" }}
              />
              <br />
              ONLINE
            </h4>
            <p className="text-primary text-center">
              Financial Literacy for Everyone
            </p>
          </div>
          <div className="col-lg-6 col-md-6 p-lg-0 text-warning">
            <h4 className="text-center fw-bold text-Warning">
              <Icon
                inline
                icon="bxs:check-shield"
                width="200"
                height="150"
                style={{ marginLeft: "18rem" }}
              />
              <br />
              SECURED
            </h4>
            <p className="text-primary text-center">
              Financial Literacy for Everyone
            </p>
          </div>
          <div className="col-lg-6 col-md-6 text-warning">
            <h4 className="text-center fw-bold text-Warning">
              <Icon
                inline
                icon="bxs:timer"
                width="200"
                height="150"
                style={{ marginLeft: "18rem" }}
              />
              <br />
              FAST
            </h4>
            <p className="text-primary text-center">
              Financial Literacy for Everyone
            </p>
          </div>
          <div className="col-lg-6 col-md-6 text-warning">
            <h4 className="text-center fw-bold text-Warning">
              <Icon
                inline
                icon="fa6-solid:hand-holding-dollar"
                width="170"
                height="150"
                style={{ marginLeft: "18rem" }}
              />
              <br />
              LOW INTEREST
            </h4>
            <p className="text-primary text-center">
              Financial Literacy for Everyone
            </p>
          </div>
          <button className="btn btn-light bg-white btn-lg border border-2 border-warning text-warning fw-bold w-50 position-relative bottom-0 start-50 translate-middle-x">
            APPLY A LOAN NOW
          </button>
        </div>
      </div>
    </section>
  );
}
