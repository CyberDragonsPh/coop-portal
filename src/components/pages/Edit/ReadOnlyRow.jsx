import React from "react";
import { Col, Card, Stack, Button, Container, Row } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <section>
        <Container>
          <div>
            <h1 style={{ color: "#1F3F77" }}>Member's Profile</h1>
          </div>
          <hr />

          <Row>
            <Col xs={12} md={8} lg={6}>
              <Card
                style={{
                  width: "430px",
                  height: "430px",
                  borderRadius: "30px",
                  background: "#1F3F77",
                }}
              >
                <div className="py-3 d-flex justify-content-center">
                  <Card.Img
                    className="rounded-circle"
                    style={{
                      width: "225px",
                      height: "225px",
                      left: "162px",
                      top: "202px",
                    }}
                    src="images/img1.png"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center text-light fs-3 fw-bold">
                    Garcia, Michael C.
                  </Card.Title>
                  <br />
                  <Card.Text className="text-center text-light">
                    <div>Account Type: Individual</div>
                    <div>Member Since: September 17, 2017</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />

              <div
                className="text-center text-light fw-bold fs-4"
                style={{
                  background: "#F6881F",
                  height: "40px",
                  width: "429px",
                  borderRadius: "10px",
                }}
              >
                Account Status: ACTIVE
              </div>
              <br />
            </Col>
            <Col xs={12} md={8} lg={6}>
              <Card style={{ background: "#DFEBFF" }}>
                <Card.Body>
                  <div className="fs-4 fw-bold" style={{ color: "#F6881F" }}>
                    Personal Details
                  </div>
                  <hr style={{ color: "#1F3F77" }} />
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Email Address
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.email}
                    </div>
                  </Stack>
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Contact Number
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.phoneNumber}
                    </div>
                  </Stack>
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Birthday
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.dob}
                    </div>
                  </Stack>
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Address
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.address}
                    </div>
                  </Stack>
                </Card.Body>
              </Card>
              <br />
              <Card style={{ background: "#DFEBFF" }}>
                <Card.Body>
                  <div className="fs-4 fw-bold" style={{ color: "#F6881F" }}>
                    Employment Details
                  </div>
                  <hr />
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Occupation
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.occupation}
                    </div>
                  </Stack>
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Employer
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.employer}
                    </div>
                  </Stack>
                  <Stack direction="horizontal" gap={3}>
                    <div
                      className="fs-5"
                      style={{ color: "#1F3F77", width: "235px" }}
                    >
                      Position
                    </div>
                    <div
                      className="border fs-5 text-center"
                      style={{
                        border: "1px solid #1F3F77",
                        borderRadius: "10px",
                        width: "450px",
                        height: "50px",
                        color: "#1F3F77",
                      }}
                    >
                      {contact.position}
                    </div>
                  </Stack>
                </Card.Body>
              </Card>
              <br />

              <div className="d-flex justify-content-end">
                <Button
                  id="button"
                  className="fs-4 fw-bold text-center"
                  onClick={(event) => handleEditClick(event, contact)}
                >
                  <span className="fs-3 fw-bold">
                    <BiEdit />
                  </span>
                  Edit Details
                </Button>
              </div>

              {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ReadOnlyRow;