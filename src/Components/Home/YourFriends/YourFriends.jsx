import React from 'react';
import useFriends from '../../../Hooks/useFriends';
import FriendsCard from './FriendsCard';


const YourFriends = () => {


    const{ friends, loading} = useFriends();

    if(loading)
    {
        return(
            <div className='flex items-center justify-center h-[30%]'>
          
              <span className="loading loading-spinner loading-xl text-green-500"></span>


            </div>
        )
    }

    return (
         <div className='w-[90%] mx-auto py-10'>
            <h1 className='font-bold text-2xl mb-5'>Your Friends</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                  friends.map(friend => (<FriendsCard key={friend.id} friend={friend} />))
                }
            </div>
        </div>
    );
};

export default YourFriends;