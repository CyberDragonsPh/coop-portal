import React from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";

export default function MemberProfile() {
  return (
    <>
      <section>
        <Container>
          <div>
            <h1 className="text-center">Member's Profile</h1>
          </div>
          <hr />

          <Row>
            <Col xs={6}>
              <div className="text-center">
                <img
                  src="images/team1.webp"
                  alt="team1"
                  style={{ height: "200px", width: "150px" }}
                  className="rounded"
                />
              </div>
            </Col>

            <Col xs={6}>
              <div class="row justify-content-start">
                <div class="fw-bold col-4">Name</div>
                <div class="col-4">: Adam Smith</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold col-4">Address</div>
                <div class="col-4">: Quezon City</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold col-4">Phone Number</div>
                <div class="col-4">: 9999-999-999</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold col-4">Active</div>
                <div class="col-4">: True</div>
              </div>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={6}>
              <h2 className="text-center">Personal Details</h2>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Full Name</div>
                <div class="fs-4 col-6">: Adam Smith</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Date of Birth</div>
                <div class="fs-4 col-6">: Jan 14, 1994</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Address</div>
                <div class="fs-4 col-6">: Quezon City</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Phone Number</div>
                <div class="fs-4 col-6">: 9999-999-999</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Email Address</div>
                <div class="fs-4 col-6">: Adam@gmail.com</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Government ID</div>
                <div class="fs-4 col-6">: UMID</div>
              </div>
            </Col>

            <Col xs={6}>
              <h2 className="text-center">Identity Details</h2>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Mother's Name</div>
                <div class="fs-4 col-6">: Samantha Smith</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Father's Name</div>
                <div class="fs-4 col-6">: Anthony Smith</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Address</div>
                <div class="fs-4 col-6">: Quezon City</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Civil Status</div>
                <div class="fs-4 col-6">: Single</div>
              </div>
              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Spouse's Name</div>
                <div class="fs-4 col-6">: N/A</div>
              </div>

              <div class="row justify-content-start">
                <div class="fw-bold fs-4 col-4">Emergency Contact</div>
                <div class="fs-4 col-6">: Samantha Smith</div>
              </div>
            </Col>
          </Row>

          <hr />

          <Button className="d-grid col-6 mx-auto">Update Info</Button>
        </Container>
      </section>
    </>
  );
}
