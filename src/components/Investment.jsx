import React from "react";
import { Icon } from "@iconify/react";

export default function Investment() {
  return (
    <section className="bgo" id="investment">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 card border-0 my-1 bgo">
            <div className="card-body">
              <h4 className="text-center fw-bold text-light">
                <Icon
                  inline
                  icon="fluent:learning-app-24-filled"
                  width="170"
                  height="150"
                  style={{ marginLeft: "7rem" }}
                />
                <br />
                LEARN
              </h4>
              <p className="text-white text-center">
                Financial Literacy for Everyone
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 card border-0 my-1 bgo">
            <div className="card-body">
              <h4 className="text-center fw-bold text-light">
                <Icon
                  inline
                  icon="fa6-solid:money-bill-trend-up"
                  width="170"
                  height="150"
                  style={{ marginLeft: "7rem" }}
                />
                <br />
                INVEST
              </h4>
              <p className="text-white text-center">
                Expansion of Every Virtual Assets
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 card border-0 my-1 bgo">
            <div className="card-body">
              <h4 className="text-center fw-bold text-light">
                <Icon
                  inline
                  icon="fa6-solid:people-group"
                  width="170"
                  height="150"
                  style={{ marginLeft: "7rem" }}
                />
                <br />
                GIVE
              </h4>
              <p className="text-white text-center">
                Building the Next Success Story
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
