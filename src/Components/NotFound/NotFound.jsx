import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>

            <h1 className='text-9xl font-bold text-green-800'>404</h1>
            <p className='text-lg text-gray-600'>Page Not Found</p>

            <Link to='/'>
                <button className='mt-4 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700'>
                    Go Back
                </button>
            </Link>
            
        </div>
    );
};

export default NotFound;