import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-auto d-flex align-items-center justify-content-center py-5">
            <img
              src="./images/Logo.png"
              alt="Virtual Assets"
              className="img-fluid"
              style={{ height: "60px" }}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-auto align-items-center justify-content-center py-5">
            <h4 className="text-center brand text-white fw-bold">CONTACT US</h4>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae ratione ut veniam cupiditate nam qui assumenda animi
              enim quos aperiam.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-auto align-items-center justify-content-center py-5">
            <h4 className="text-center brand text-white fw-bold">
              OPERATING HOURS
            </h4>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae ratione ut veniam cupiditate nam qui assumenda animi
              enim quos aperiam.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-auto align-items-center justify-content-center py-5">
            <h4 className="text-center brand text-white fw-bold">ADDRESS</h4>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae ratione ut veniam cupiditate nam qui assumenda animi
              enim quos aperiam.
            </p>
          </div>
          <div className="col-lg col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
            <ul className="list-unstyled d-flex">
              <li className="text-white fs-1 me-3">
                <Icon icon="cib:facebook" />
              </li>
              <li className="text-white fs-1 me-3">
                <Icon icon="ant-design:twitter-outlined" />
              </li>
              <li className="text-white fs-1 me-3">
                <Icon icon="ant-design:instagram-outlined" />
              </li>
              <li className="text-white fs-1 me-3">
                <Icon icon="bxl:tiktok" />
              </li>
              <li className="text-white fs-1 me-3">
                <Icon icon="ant-design:github-filled" />
              </li>
              <li className="text-white fs-1 me-3">
                <Icon icon="bxl:discord-alt" />
              </li>
              <li className="text-white fs-1 me-3">
                <Icon icon="ant-design:youtube-filled" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
