import { Col, Container, Row, Button, Card, Stack } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

export default function MemberProfile() {
  return (
    <>
      <section>
        <Container>
          <div>
            <h1 style={{ color: "#1F3F77" }}>Member's Profile</h1>
          </div>
          <hr style={{ border: "1px solid blue" }} />

          <Row>
            <Col xs={12} md={8} lg={6}>
              <Card
                id="card1"
                style={{
                  width: "430px",
                  height: "430px",
                  borderRadius: "30px",
                }}
              >
                <div
                  className="py-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
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
              <Card id="card2" style={{ background: "#DFEBFF" }}>
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
                      mikez.garcia@gmail.com
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
                      09909990000
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
                      September 17, 1988
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
                      NCR
                    </div>
                  </Stack>
                </Card.Body>
              </Card>
              <br />
              <Card id="card3" style={{ background: "#DFEBFF" }}>
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
                      Employee - Private Company
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
                      Google Philippines
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
                      Senior Developer III
                    </div>
                  </Stack>
                </Card.Body>
              </Card>
              <br />

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  id="button"
                  className="fs-4 fw-bold text-center"
                  style={{
                    background: "#F6881F",
                    borderRadius: "10px",
                    height: "55px",
                    border: "none",
                  }}
                >
                  <span className="fs-3 fw-bold">
                    <BiEdit />
                  </span>
                  Edit Details
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}