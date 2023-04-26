export const addPlayers = (e, player, setPlayers, setNamePlayer, userPosition, players) => {
  if(e.key === "Enter" || e.target.className === "button") {
    if(player !== "") {
      setPlayers((oldState) => {
        const newState = [...oldState, {
          id: oldState.length + 1,
          name: player,
          score: 0,
          displayAvatar: false,
          color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
          x: userPosition[players.length].x,
          y: userPosition[players.length].y,
          xMax: userPosition[players.length].xMax,
          yMax: userPosition[players.length].yMax,
          xStart: userPosition[players.length].xStart,
          yStart: userPosition[players.length].yStart,
          xLast: userPosition[players.length].xLast,
          yLast: userPosition[players.length].yLast,
        }];
        return newState;
      });
      setNamePlayer("");
    }
  }
}

export const deletePlayers = (setPlayers, players, player) => {
  const newArray = players.filter(elem => elem.id != player.id);
  setPlayers(newArray);
}