import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" class="py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-center flex-column">
          <div class="title text-center text-primary pt-3 pb-5">
            <h1 class="position-relative d-inline-block ms-4 fw-bold">
              Newsletter Subscription
            </h1>
          </div>
          <div class="input-group mb-3 mt-3 col-lg-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Email ..."
            />
            <button class="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
