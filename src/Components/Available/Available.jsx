import React, { use } from 'react';
import Player from './player';
import './player.css'

const Available = ({fetchPlayer , purchases , setFund , fund , setPurchased}) => {
    const Players = use(fetchPlayer)
    return (
          <div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3 mt-3 gap-6'>
          {
               Players.map(player => <Player  key={player.id} player = {player} setFund = {setFund} fund = {fund} purchases ={purchases} setPurchased= {setPurchased}></Player>)
        } 
          </div>
    )
};

export default Available;


