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
      </div>
    </section>
  );
}
