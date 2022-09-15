import React from "react";

export default function AboutUs() {
  return (
    <section id="about-us" className="bglp py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-lg-1 order-lg-3">
            <div className="title pt-3 pb-2">
              <h2 className="text-primary position-relative d-inline-block">
                About Us
              </h2>
            </div>
            <p className="text-primary text-justify">
              Virtual Assets Credit Cooperative (VACC) was established by groups
              of professionals such as certified public Accountants, Lawyers,
              Educators, Businessmen, Law Enforcement Officers, Web Developers
              and others with one common goal to extend help by providing
              Credits/Loans for uplifting lives thru innovation and technology.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="./images/classs.png"
              alt="about us"
              className="border border-primary border-5 d-none d-sm-block img-fluid"
            />
          </div>
        </div>

        <div className="container text-center pt-3">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-5 my-2 border rounded-2 border-warning bg-light">
              <h4 className="text-center fw-bold text-primary">Vision</h4>
              <p className="text-primary text-justify">
                We dream to create improvement in the lives of many people and
                to serve our best to become the number one online cooperative in
                the Country To be one of a kind credit cooperative using
                technology that offers assistance to its member to uplift and
                improve their lives.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 my-2 border rounded-2 border-warning">
              <h4 className="text-center fw-bold text-primary">Mission</h4>
              <p className="text-primary text-justify">
                To be one of a kind Cooperative using technology that offers
                financial assistance to it's member to uplive and improve their
                lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
