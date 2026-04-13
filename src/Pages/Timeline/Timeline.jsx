import React, { useContext, useState } from 'react';
import { ContextExporter } from '../../Contexts/ContextExporter';
import { IoCall } from 'react-icons/io5';
import { IoMdText, IoMdVideocam } from 'react-icons/io';
import TimelineCard from '../../Components/TImeLineCard/TimelineCard';

const Timeline = () => {


    const { interactions } =useContext(ContextExporter);

    const [filter, setFilter] = useState("All");

    let filteredInteractions = [];

    if(filter === "All")
    {
        filteredInteractions = interactions
        
    }
    else    
    {
        filteredInteractions = interactions.filter(interaction => interaction.type === filter);
    }
    
    const handleFilter = (type) => {
        setFilter(type);
        document.activeElement.blur();
    };

    filteredInteractions = [...filteredInteractions].sort((a,b) =>new Date(b.date)-new Date(a.date));

    return (
        <div className='w-[80%] mx-auto mt-20'>

                <div>
                    <h1 className='text-3xl font-bold mb-5'>Timeline</h1>
                </div>

                <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn m-1 mb-5">Filter by {filter}</div>
                     <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleFilter('All')}><a>All</a></li>
                        <li onClick={()=>handleFilter('Call')}><a>Call</a></li>
                        <li onClick={()=>handleFilter('Text')}><a>Text</a></li>
                        <li onClick={()=>handleFilter('Video')}><a>Video</a></li>
                   </ul>
</div>




                {
                    filteredInteractions.length === 0 && <div className='flex items-center justify-center h-[50vh]'>
                        <p className='text-gray-500 text-lg'>No interactions yet. Start connecting with your friends!</p>
                    </div> 
                }

                {
                    filteredInteractions.map((interaction, index) => (<TimelineCard key={index} interaction={interaction} index={index} />))

                        // <div>
                        //     <div key={index} className='bg-white p-4 rounded shadow mb-4 flex items-center gap-4'>
                        //     <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold'>
                        //         {interaction.type === "Call" && <span className='text-green-500'><IoCall /> </span>}
                        //         {interaction.type === "Text" && <span className='text-blue-500'><IoMdText /> </span>}
                        //         {interaction.type === "Video" && <span className='text-yellow-500'><IoMdVideocam/></span>}
                        //     </div>
                        //     <div>
                        //         <h3 className='font-semibold'>{interaction.name}</h3>
                        //         <p className='text-gray-500'>{interaction.type} - {interaction.date}</p>
                        //     </div>

                        // </div>
                       
                        // </div>
                    

                }





        </div>
    );
};

export default Timeline;