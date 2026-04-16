import React from "react";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router";

const TimelineCard = ({ interaction, index }) => {


  console.log(interaction.id);

  return (

    <Link to={`/friend/${interaction.id}`} className="block">
    <div key={index} className="bg-white p-4 rounded shadow mb-4 flex items-center justify-between hover:bg-green-100 gap-4   transition duration-200">

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
          {interaction.type === "Call" && (<span className="text-green-500"><IoCall /></span>)}
          {interaction.type === "Text" && (<span className="text-blue-500"><IoMdText /></span>)}
          {interaction.type === "Video" && (<span className="text-yellow-500"><IoMdVideocam /></span>)}
        </div>

        <div>
          <h3 className="font-semibold">{interaction.name}</h3>
          <p className="text-gray-500">{interaction.type} - {interaction.date}</p>
        </div>
      </div>

      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 ">
        <img className="rounded-full" src={interaction.picture} alt={interaction.name} />
      </div>
    </div>
     </Link>
  );
};

export default TimelineCard;
