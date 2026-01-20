import React, { use } from 'react';
import Player from './player';
import './player.css'

const Available = ({fetchPlayer}) => {
    const Players = use(fetchPlayer)
    console.log(Players)
    return (
          <div className='card'>
          {
               Players.map(player => <Player key={player.id} player = {player}></Player>)
        } 
          </div>
    )
};

export default Available;


