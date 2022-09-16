import React from "react";
import { Icon } from "@iconify/react";
import NotYetMemberBtn from "../../components/utilities/NotYetMemberBtn";
import LoginAlt from "../../components/utilities/LoginAlt";
import { Link, useNavigate } from "react-router-dom";

import { bindActionCreators } from "redux";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import * as actionUser from "../../redux/actionUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation
  const [invalidUser, setInvalidUser] = useState(false);

  const [userList] = useCollection(db.collection("users"));
  const [user] = useAuthState(auth);
  const { loginUser } = bindActionCreators(actionUser, useDispatch());
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);

  useEffect(() => {
    if (user || activeUser.email) {
      // navigate home page
      navigate("/members");
    }
  });

  const checkIfValid = () => {
    let isValid = false;
    // Check if there's no user created
    if (userList.docs.length === 0) {
      setInvalidUser(true);
      return false;
    }
    // Check if user exist
    userList.docs.forEach((user) => {
      if (user.data().email === email && user.data().password === password) {
        setInvalidUser(false);
        isValid = true;
      } else {
        setInvalidUser(true);
      }
    });
    //return statement
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      loginUser({ email });
    }
  };

  return (
    // Fullpage Container
    <div
      id="login"
      className="w-full h-screen flex bg-gradient-to-br from-orange-300 to-orange-100"
    >
      {/* Box Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-l-[25px] rounded-r-[25px]">
        {/* LeftSide Container */}

        <div className="w-full h-[550px] hidden md:block bg-loginImg bg-no-repeat bg-cover rounded-l-[25px]">
          <div className="flex flex-col h-full items-center justify-end pb-5">
            <div className="bg-primary w-3/4 h-20 rounded-xl overflow-hidden">
              <NotYetMemberBtn />
            </div>
          </div>
        </div>
        {/* End of LeftSide Container */}

        {/* RightSide Container */}
        <div className="bg-primary p-5 flex-col justify-around rounded-r-[25px] rounded-l-[25px] md:rounded-l-none">
          <div className="container">
            {/* Logo */}
            <div className="flex flex-col items-center mb-4">
              <img
                className="h-16 mt-2"
                src="./images/logo-white-orange.png"
                alt="logo"
              />
              <h2 className="font-sans font-bold text-white text-center">
                Virtual Assest Credit Cooperative
              </h2>
              <h4 className="font-sans font-extralight text-white text-center">
                Community Building, Enriching through Technology
              </h4>
            </div>
            {/* End of Logo */}
            <h1 className="font-sans font-medium text-white text-4xl mt-5">
              Welcome Back!
            </h1>
            <h4 className="font-sans font-extralight text-white">
              Please Login to access your virtual assets account.
            </h4>

            {/* INPUTS */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-end">
                <input
                  className="w-full h-12 rounded-lg mt-5 placeholder:text-2xl placeholder:p-3"
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={invalidUser}
                />

                <input
                  className="w-full h-12 rounded-lg mt-3 placeholder:text-2xl placeholder:p-3"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={invalidUser}
                />
              </div>

              <button class="group overflow-hidden mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-orange-600">
                <Icon className="text-2xl text-white" icon="entypo:login" />
                <span class="font-sans font-medium text-xl text-white pl-1">
                  Login
                </span>
              </button>
            </form>
            {/* End of INPUTS */}
            <LoginAlt />
            {/* Not Yet Member? */}
            <div className="md:hidden flex flex-col items-center pt-3">
              <img className="mb-2" src="./images/hr-mv.png" alt="hr" />
              <NotYetMemberBtn />
            </div>
          </div>
        </div>
        {/* End of RightSide Container */}
      </div>
      {/* End of Box Container */}
    </div>
    // End of Fullpage Container
  );
}
