import React from "react";
import Images from "../../../assets/images";

const details = [
  {
    profile: Images.profile,
    course: "Bachelor Of Engineering In Information Technology",
    college: "Dayalbagh Educational Institute",
    place: "AGRA",
    year: "2018-2022",
    status: "Completed",
  },
  {
    profile: Images.profile,
    course: "Intermediate & High School in Science Stream",
    college: "New St. Stephen's Public School",
    place: "AGRA",
    year: "2016-2018",
    status: "Completed",
  },
];

function EducationCard() {
  return (
    <div className="flex flex-col gap-14">
      {details.map((detail, index) => {
        return (
          <div
            className="lg:h-52  flex flex-col lg:flex-row gap-2 lg:gap-8 rounded-xl hover:drop-shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:-translate-y-1"
            key={index}
          >
            <img
              src={detail.profile}
              alt="college"
              className="flex h-52 lg:basis-1/4 rounded-lg"
            />
            <div className="flex flex-col gap-3 py-4 px-4 lg:py-8 ">
              <p className="font-bold text-3xl text-info">{detail.course}</p>
              <p className="text-lg font-semibold ">
                {detail.college} | {detail.place}
              </p>
              <p className="text-xl text-primary font-bold">
                {detail.year} | {detail.status}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationCard;
