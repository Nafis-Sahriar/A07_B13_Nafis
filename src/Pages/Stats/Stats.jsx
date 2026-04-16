import React, { useContext } from 'react';
import { ContextExporter } from '../../Contexts/ContextExporter';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const Stats = () => {


    const {interactions} = useContext(ContextExporter);

    const callCount = interactions.filter(interaction => interaction.type === "Call").length;
    const textCount = interactions.filter(interaction => interaction.type === "Text").length;
    const videoCount = interactions.filter(interaction => interaction.type === "Video").length;

    const data =[
        { type: "Call", count: callCount ,fill: "#10b981"},
        { type: "Text", count: textCount ,fill: "#3b82f6"},
        { type: "Video", count: videoCount ,fill: "#244D3F"},
    ]


    return (
    <div className="my-10 container mx-auto px-4">

  <div className="bg-white shadow-lg rounded-xl p-8 border border-slate-200">

    {/* TITLE */}
    <h2 className="text-3xl font-bold text-center mb-2 text-[#244D3F]">
      Interaction Statistics
    </h2>
  

    {/* TOTAL */}
    <div className="text-center mb-10">
      <p className="text-gray-500">Total Interactions</p>
      <h1 className="text-4xl font-bold text-[#244D3F]">
        {interactions.length}
      </h1>
    </div>

    {/* CHART */}
    <PieChart
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        aspectRatio: 1,
      }}
    >
      <Pie
        data={data}
        dataKey="count"
        nameKey="type"
        innerRadius="60%"
        outerRadius="90%"
        paddingAngle={4}
      >
       
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>


       <Link to='/'>
                            <div className='flex items-center justify-center'>
                                 <button className='mt-4 px-4 py-2  bg-green-800 text-white rounded-md hover:bg-green-700'>
                                 <span className='flex items-center justify-center gap-4'><FaArrowLeft />Go Back to Home</span>
                                </button>
                            </div>
                               
                    </Link>

   
   

  </div>
</div>
    );
};

export default Stats;