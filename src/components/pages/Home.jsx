import React, { useEffect } from "react";
import Footer from "../Footer";
import * as actionUser from "../../redux/actionUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import AboutUs from "../sections/AboutUs";
import Hero from "../sections/Hero";
import HeroIcons from "../sections/HeroIcon";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  const [user] = useAuthState(auth);
  const [userList] = useCollection(db.collection("users"));
  const activeUser = useSelector((state) => state.activeUser);
  const { loginUser } = bindActionCreators(actionUser, useDispatch());

  useEffect(() => {
    if (user) {
      loginUser({ email: user.email });
    } else if (userList?.docs.length !== 0) {
      userList?.docs.forEach((doc) => {
        if (doc.data().email === activeUser.email) {
          loginUser({ id: doc.id, email: doc.data().email });
        }
      });
    }
  }, [user, userList, activeUser.email]);

  return (
    <>
      <Hero />
      <AboutUs />
      <HeroIcons />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
