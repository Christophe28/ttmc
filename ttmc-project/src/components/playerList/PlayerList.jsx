// React
import React, {useEffect, useState} from 'react';

// Config


// Functions

const PlayerList = ({players, currentPlayer}) => {

function isCurrent(player){
    if(currentPlayer === player.id - 1){
        return true
    }else{
        return false
    }

}

    return (
        <div className='containerPlayer'>
            <ul>
                {players.map((player)=>(
                    <li key={player.id} className={isCurrent(player) ? "highLight" : ""}> <img src={player.color} alt="" /> {player.name}</li>
                ))}
            </ul>
        </div>
        )
    }

export default PlayerList;