import React, { useState } from 'react';
import userImg from '../../assets/Group.png';
import flag from '../../assets/flag.png';
const Player = ({player , setFund , fund ,purchases, setPurchased}) => {
    const [status, setStatus] = useState(false);
    return (
            <div className="card bg-base-100 shadow-sm">
  <figure>
    <img className='p-4 w-full h-100 object-cover'
      src={player.image}
      alt="virat kholi" />
  </figure>
  <div className="card-body">
    <div className=' flex gap-2.5 '> 
          <img src={userImg} alt="" />
           <span className='font-bold text-xl'>{player.name}</span>
    </div>
    <div className='flex items-center justify-between'>
        <div className='flex'>
              <img src= {flag} alt="" />
               <span className='ml-2 text-l'>{player.country}</span>
        </div>
        <span className='bg-gray-100 rounded-l text-l'>{player.role}</span>
    </div>
    <div>
        <h2 className='font-bold '>Rating : {player.rating}</h2> 
    </div>
     <div className='flex items-center justify-between'>
                <h2 className='font-bold '>{player.battingHand}</h2> 
                <h2 className='text-gray-400 font-semibold'>{player.bowlingHand}</h2> 
 
     </div>
    <div className="card-actions flex justify-between items-center">
       <h2 className='font-bold '>Price : $ {player.price}M</h2> 
      <button disabled ={status} onClick={()=>{setStatus(true);
        const remaining = fund-player.price;
       fund > player.price ? setFund(remaining) : alert("Run out of money");
       purchases.id !== player.id ? setPurchased([...purchases,player]) : alert("Player already Selected")
    }} className="btn btn-sm">{status ? "Selected" : "Choose Player "}</button>
    </div>
  </div>
</div>);
};

export default Player;