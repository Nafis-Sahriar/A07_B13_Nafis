import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../Hooks/useFriends';
import { IoCall } from 'react-icons/io5';
import { IoMdText, IoMdVideocam } from 'react-icons/io';
import { ContextExporter } from '../../Contexts/ContextExporter';
import { toast } from 'react-toastify';

const FriendDetails = () => {

    const { friendId } = useParams();

    const {friends, loading } = useFriends();

    const Id = parseInt(friendId);

    const friend = friends.find(f => f.id === Id);

    const {interactions,  setInteractions } = useContext(ContextExporter);

    const handleInteraction = (type) => {
        
        const interaction = {
            name: friend.name,
            type,
            date: new Date().toISOString(),
            picture: friend.picture
        };
        setInteractions((prev) => [...prev, interaction]);

        toast.success(` ${type}  with ${friend.name}`, {position: "top-center", autoClose: 3000,draggable: true,theme: "colored",});
    }

    if(loading)
    {
        return(
            <div className='flex items-center justify-center h-[30%]'>
                <span className="loading loading-spinner loading-xl text-green-500"></span> 
            </div>)
    }

    else
    {
        return (
    <div className="w-[90%] mx-auto py-6 grid grid-cols-1 md:grid-cols-3 gap-6">

 
            <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center gap-3">

          <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover" />

    <h2 className="text-lg font-semibold">{friend.name}</h2>

    
    <span className={`px-3 py-1 text-sm rounded-full ${friend.status === "overdue" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
      {friend.status}
    </span>


    <div className="flex flex-wrap justify-center gap-2">
      {friend.tags.map((tag, index) => (
        <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{tag}</span>
      ))}

    </div>

    <p className="text-gray-500 italic text-sm"> "{friend.bio}" </p>

    <p className="text-sm text-gray-400"> Preferred: email </p>

   
    <div className="w-full flex flex-col gap-2 mt-4">

      <button className="btn w-full">Snooze 2 Weeks</button>

      <button className="btn w-full">Archive</button>

      <button className="btn w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"> Delete </button>

    </div>


  </div>

 
  <div className="md:col-span-2 flex flex-col gap-6">

  
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

      <div className="bg-white shadow rounded-xl p-4 text-center">

        <h2 className="text-2xl font-bold text-green-800">{friend.days_since_contact}</h2>
        <p className="text-sm text-gray-500">Days Since Contact</p>

      </div>

      <div className="bg-white shadow rounded-xl p-4 text-center">
        <h2 className="text-2xl font-bold text-green-800">{friend.goal}</h2>
        <p className="text-sm text-gray-500">Goal (Days)</p>
      </div>

      <div className="bg-white shadow rounded-xl p-4 text-center">
        <h2 className="text-lg font-semibold text-green-800">{friend.next_due_date}</h2>
        <p className="text-sm text-gray-500">Next Due</p>
      </div>

    </div>

  
    <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">
 

      <div>
        <h3 className="font-semibold text-green-900">Relationship Goal</h3>
        <p className="text-gray-600">Connect every <span className="font-bold">{friend.goal} days</span></p>
      </div>

      <button className="btn">Edit</button>
    </div>

    <div className="bg-white shadow rounded-xl p-6">

      <h3 className="font-semibold text-green-900 mb-4">Quick Check-In</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <button onClick={()=>handleInteraction('Call')} className="btn flex flex-row items-center gap-2 py-6 text-black"> <span><IoCall /> </span> Call </button>

        <button onClick={()=>handleInteraction('Text')} className="btn flex flex-row items-center gap-2 py-6"> <span><IoMdText /> </span> Text </button>

        <button onClick={()=>handleInteraction('Video')} className="btn flex flex-row items-center gap-2 py-6"><span><IoMdVideocam/> </span> Video </button>

                  </div>

         </div>

         <div>
            {
                interactions.map((interaction, index) => {
                    if(interaction.name === friend.name)
                    {
                        return (
                            <div key={index} className="bg-gray-100 p-4 rounded-xl flex items-center gap-4 mb-5">

                                <div>
                                     {
                                    interaction.type === "Call" && <span><IoCall /> </span>
                                   
                                }

                                {
                                     interaction.type === "Text" && <span><IoMdText /> </span>
                                    
                                }
                                {
                                    interaction.type === "Video" && <span><IoMdVideocam/></span>
                                }
                                </div>

                                <div>
                                   <p>{interaction.type}</p>
                                  <p>{interaction.date}</p> 
                                </div>
                               

                                
                            </div>
                        );

                    }
                })
            }
         </div>

       </div>
    </div>






        );
    }
};

export default FriendDetails;