import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {

  let statusStyle = "";
  let statusText = "";
  if (friend.status === "overdue") 
  {
    statusStyle = "bg-red-400 text-white font-bold";
    statusText = "Overdue";
  } 
  else if (friend.status === "on-track") 
  {
    statusStyle = "bg-green-300 text-black font-bold";
    statusText = "On Track";
  } 
  else 
  {
    statusStyle = "bg-yellow-400 text-white font-bold";
    statusText = "Almost Due";
  }

  return (

    <Link to={`/friend/${friend.id}`} className="no-underline">
    <div>
    
    
      <div className="bg-gray-100 rounded-xl p-6 text-center shadow">

      
       <div className="flex justify-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-[#244D3F]"
        />
      </div>

      
      <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

      
      <p className="text-gray-500 mt-1">{friend.days_since_contact}d ago</p>

     
      <div className="mt-3">
      {
        friend.tags.map((tag, index) => (
          <span key={index} className="bg-green-200 text-green-900 font-bold px-4 py-1 rounded-full text-sm mr-2">{tag}</span>
        ))
      }
      </div>

      <div className="mt-4">
        <span className={`px-4 py-2 rounded-full text-sm ${statusStyle}`}>
          {statusText}
        </span>
      </div>

    </div>
    </div>
    </Link>)
};

export default FriendsCard;