import React from 'react';
import bin from '../../assets/Vector.png'
const sold = ({purchase,handleRemove}) => {
         const handleDelete = () =>
 {
     handleRemove(purchase);
 }
    return (
       <div className='p-2.5 max-w-300 flex items-center justify-between mx-auto mt-4 border-2'>
            <div className='flex items-center'>
                <img className='w-20 h-20 p-0.5 rounded-lg' src={purchase.image} alt="" />
           <div className='ml-1.5'>
                           <span className='font-bold text-xl'>{purchase.name}</span>
                            <h2 className='font-semibold text-[1rem] text-gray-400'>{purchase.battingHand}</h2> 
            </div>
              
            </div>
            <img  onClick={handleDelete} className='mr-1.5' src={bin} alt="" />
        </div>
    );
};

export default sold;