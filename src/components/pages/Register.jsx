import firebase from "firebase/compat/app";
import { Form, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // validation
  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidMiddleName, setInvalidMiddleName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const [userList] = useCollection(db.collection("users"));
  const [user] = useAuthState(auth);
  const activeUser = useSelector((state) => state.activeUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user || activeUser.email) {
      navigate("/");
    }
  });

  const checkIfValid = () => {
    let isValid = true;
    userList?.docs.forEach((doc) => {
      // Check if firstname is valid
      if (doc.data().firstName === firstName || !firstName) {
        isValid = false;
        setInvalidFirstName(true);
      } else {
        setInvalidFirstName(false);
      }

      // Check if middlename is valid
      if (doc.data().firstName === middleName || !middleName) {
        isValid = false;
        setInvalidMiddleName(true);
      } else {
        setInvalidMiddleName(false);
      }

      // Check if lastname is valid
      if (doc.data().firstName === lastName || !lastName) {
        isValid = false;
        setInvalidLastName(true);
      } else {
        setInvalidLastName(false);
      }

      // Check if email is valid
      if (doc.data().email === email || !email) {
        isValid = false;
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
    });

    // Check if password is same with confirmPassword
    if (password !== confirmPassword || !password) {
      setInvalidPassword(true);
      isValid = false;
    } else {
      setInvalidPassword(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfValid()) {
      db.collection("users").add({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: password,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setShowModal(true);
    }
  };

  const closeRegistration = () => {
    setShowModal(false);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    // main container
    <div
      id="register"
      className="w-full h-screen flex items-center justify-center fixed bg-regImg bg-cover"
    >
      {/* registration form container */}
      <div className=" bg-primary h-screen w-full sm:m-4 sm:max-w-[770px] sm:max-h-[620px]  sm:rounded-3xl sm:shadow-lg md:shadow-gray-600">
        {/* form starts here */}
        <div className="w-full mt-10 sm:mt-7" action="/">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center m-4 md:flex-row">
            <img
              className="h-16  md:h-24"
              src="./images/logo-white-orange.png"
              alt=""
            />
            <div className="flex flex-col items-center md:space-x-2">
              <h2 className="font-sans font-bold text-white text-center text-lg md:text-xl">
                Virtual Assest Credit Cooperative
              </h2>
              <h4 className="font-sans font-extralight text-white text-center text-3xl">
                BECOME A NEW MEMBER
              </h4>
            </div>
          </div>
          {/* End of Logo */}
          <img className="w-full h-1" src="./images/hr-mv.png" alt="hr" />
          {/* Inputs Starts Here */}

          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col ml-5 mr-5  ">
              {/* First Name */}

              <Form.Group className="flex flex-row  mt-4 justify-between ">
                <Form.Label
                  className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                  htmlFor="firstname"
                >
                  First Name
                </Form.Label>

                <Form.Control
                  className="h-12 w-full md:max-w-md  rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isInvalid={invalidFirstName}
                  placeholder="First Name"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  firstname already exist.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Middle Name */}
              <Form.Group className="flex flex-row mt-4 justify-between">
                <Form.Label
                  className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                  htmlFor="middlename"
                >
                  Middle Name
                </Form.Label>
                <Form.Control
                  className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4"
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  isInvalid={invalidMiddleName}
                  placeholder="Middle Name"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  middlename already exist.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Last Name */}
              <Form.Group className="flex flex-row justify-between mt-4">
                <Form.Label
                  className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                  htmlFor="lastname"
                >
                  Last Name
                </Form.Label>
                <Form.Control
                  className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isInvalid={invalidLastName}
                  placeholder="Last Name"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  lastname already exist.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email Address */}
              <Form.Group className="flex flex-row justify-between mt-4">
                <Form.Label
                  className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                  htmlFor="email"
                >
                  Email Address
                </Form.Label>
                <Form.Control
                  className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={invalidEmail}
                  placeholder="Email Address"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  email already exist.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password */}
              <Form.Group className="flex flex-row justify-between mt-4">
                <Form.Label
                  className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                  htmlFor="password"
                >
                  Password
                </Form.Label>
                <Form.Control
                  className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={invalidPassword}
                  placeholder="Password"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  The password confirmation does not match
                </Form.Control.Feedback>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="flex flex-row justify-between items-center  mt-4 ">
                <Form.Label
                  className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </Form.Label>
                <Form.Control
                  className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  isInvalid={invalidPassword}
                  placeholder="Confirm Password"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  The password confirmation does not match
                </Form.Control.Feedback>
              </Form.Group>
              {/* Inputs Ends Here */}

              {/* Modal */}
              <Modal show={showModal}>
                <Modal.Header>
                  <Modal.Title className="text-dark">
                    Congratulation!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark">
                  Successful Registration!
                </Modal.Body>
                <Modal.Footer>
                  <button
                    variant="secondary"
                    onClick={() => closeRegistration()}
                  >
                    Close
                  </button>
                </Modal.Footer>
              </Modal>

              <div className="w-full flex flex-row justify-end">
                <button
                  className="group overflow-hidden mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-orange-600"
                  type="submit"
                >
                  <span className="font-sans font-medium text-xl text-white pl-1">
                    Create Account
                  </span>
                </button>
              </div>
            </div>
          </Form>
          <p className="text-center mb-4 text-warning">
            Already have an account?
            <Link to="/login" className="text-warning">
              Login now
            </Link>
          </p>
        </div>
        {/* End of Form here */}
      </div>
      {/* end of form container */}
    </div>
    // end main container
  );
}
