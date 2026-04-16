import React, { useContext, useState } from 'react';
import { ContextExporter } from '../../Contexts/ContextExporter';
import TimelineCard from '../../Components/TImeLineCard/TimelineCard';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router';

const Timeline = () => {


    const { interactions } =useContext(ContextExporter);

    const [search, setSearch] = useState("");

    const handleSearch = (e) => 
    {
        const searchedVal = e.target.value.toLowerCase();
        setSearch(searchedVal);
    };


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

    filteredInteractions = filteredInteractions.filter(interaction =>
    interaction.name.toLowerCase().includes(search));
    
    const handleFilter = (type) => 
    {
        setFilter(type);
        document.activeElement.blur();
    };

    filteredInteractions = [...filteredInteractions].sort((a,b) =>new Date(b.date)-new Date(a.date));



  

    return (
        <div className='w-[80%] mx-auto mt-20'>

                <div>
                    <h1 className='text-3xl font-bold mb-5 text-green-900'>Timeline</h1>
                </div>


                <div className='flex justify-between'>
                        <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn m-1 mb-5">Filter by {filter}</div>
                     <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='hover:bg-green-300 hover:text-green-800 hover:font-bold' onClick={()=>handleFilter('All')}><a>All</a></li>
                        <li className='hover:bg-green-300 hover:text-green-800 hover:font-bold'  onClick={()=>handleFilter('Call')}><a>Call</a></li>
                        <li className='hover:bg-green-300 hover:text-green-800 hover:font-bold' onClick={()=>handleFilter('Text')}><a>Text</a></li>
                        <li className='hover:bg-green-300 hover:text-green-800 hover:font-bold' onClick={()=>handleFilter('Video')}><a>Video</a></li>
                   </ul>
               </div>

               <div>

                <form className="flex items-center gap-6 mb-5">
                            <input  onChange={handleSearch} type="text" placeholder="Search by friend name "  className="border input border-green-800"  />
                            <span><FaSearch /></span>
                            
                </form>

               </div>
                </div>

            




                {
                    filteredInteractions.length === 0 && <div className='flex items-center justify-center h-[50vh]'>
                        <p className='text-gray-500 text-lg'>No interactions yet. Start connecting with your friends!</p>
                    </div> 
                }

                {
                    filteredInteractions.map((interaction, index) => (<TimelineCard key={index} interaction={interaction} index={index} />))

                }


                    <Link to='/'>
                            <div className='flex items-center justify-center'>
                                 <button className='mt-4 px-4 py-2  bg-green-800 text-white rounded-md hover:bg-green-700'>
                                 <span className='flex items-center justify-center gap-4'><FaArrowLeft />Go Back to Home</span>
                                </button>
                            </div>
                               
                    </Link>

               





        </div>
    );
};

export default Timeline;