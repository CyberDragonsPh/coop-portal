import React from "react";

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="bg-subOne h-screen w-full flex flex-col items-center justify-center text-center font-sans text-primary relative "
    >
      <img
        className="absolute object-cover h-full w-full mix-blend-multiply opacity-10 sm:hidden"
        src="./images/team-celebrate.jpg"
        alt=""
      />
      {/* About Us Container */}
      <div className="md:flex md:flex-row md:items-center md:justify-between max-w-[850px] pl-5 pr-5">
        {/* Image Container */}

        <img
          className="hidden md:flex h-[200px] p-4"
          src="./images/teamceleb-boxed.png"
          alt=""
        />

        <div className="flex flex-col items-center justify-center mt-4 md:items-start md:justify-center ">
          <h1 className="font-semibold text-3xl">About Us</h1>
          <p className="font-normal text-lg text-justify">
            Virtual Assets Credit Cooperative (VACC) was established by groups
            of professionals such as certified public accountants, lawyers,
            educators, businessmen, law enforcement officers, web developers,
            and others with one common goal to extend help by providing
            credits/loans for uplifting lives thru innovation and technology
          </p>
        </div>
      </div>
      <div className="flex flex-col max-2/3 w-full items-center justify-around p-4 space-y-4 md:flex-row  md:space-y-0 md:space-x-4">
        {/* Mission */}
        <div className="w-full h-full relative bg-slate-50 border-4 border-secondary rounded-xl p-3">
          <h1 className="font-semibold text-2xl">Mission</h1>
          <p>
            To be one of a kind Cooperative utilizing technology offering
            financial assistance to its member in uplifting and improving their
            lives.
          </p>
        </div>

        {/* Vision */}
        <div className="w-full h-full relative bg-slate-50 border-4 border-primary rounded-xl p-3">
          <h1 className="font-semibold text-2xl">Vision</h1>
          <p>
            Become the leading community in achieving success through financial
            literacy, technological innovations and camaraderie.
          </p>
        </div>
      </div>
    </div>
  );
}
