import React from "react";
import CompPic from "../assets/images/homebg.webp";
import { Link } from "react-router-dom";
import Company from "../pages/Company";


const CompanyCard = ({ name, descript, category }) => {
  return (
    <div className="container bg-dark  p-5 space-4 m-2 max-w-[30%] rounded-2xl">
      <div>
        <img
          src={CompPic}
          alt="Company Logo"
          className=" h-[65%] object-cover w-full rounded-2xl"
        />
        <span className="block mt-5 text-lg font-semibold my-2 text-blue-700">
          {name}
        </span>
        <p className="max-w:5ch text-grey text-lg">{descript}</p>
        <span className="block mt-5 text-lg font-semibold my-2 text-white mb-5">
          {category}
        </span>
        <Link
          to={`../pages/${Company}`}
          className="px-5 py-3 rounded-full bg-white text-darkest self-center text-bold my-8"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
