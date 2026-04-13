import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-gray-100 py-12">

      <div className="w-[90%] mx-auto text-center">

      
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

      
        <div className="mt-6">
          <button className="bg-[#244D3F] text-white px-5 py-2 rounded">
            + Add a Friend
          </button>
        </div>

        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

       
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-[#244D3F]">10</h2>
            <p className="text-gray-500 mt-2">Total Friends</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
            <p className="text-gray-500 mt-2">On Track</p>
          </div>

          
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-[#244D3F]">6</h2>
            <p className="text-gray-500 mt-2">Need Attention</p>
          </div>

        
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-[#244D3F]">12</h2>
            <p className="text-gray-500 mt-2">Interactions This Month</p>
          </div>

        </div>

      </div>

    </div>
        </div>
    );
};

export default Banner;