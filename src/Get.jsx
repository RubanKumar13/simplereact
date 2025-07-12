import React, { useEffect, useState } from 'react';

function Get() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
   
    fetch('https://in.global.nba.com/stats2/league/playerlist.json?locale=en')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        
        const playerList = json.payload.players || [];
        setPlayers(playerList);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(players); 
  
  return (
    <div>
      <h1>NBA Player List</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>TEAM</th>
            <th>POS</th>
            <th>HT</th>
            <th>WT</th>
            <th>EXP</th>
            <th>COUNTRY</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>
                <img
                  src={`https://cdn.nba.com/headshots/nba/latest/260x190/${player.playerProfile.personId}.png`}
                  alt={`${player.playerProfile.displayName}`}
                  style={{ width: '60px', height: '40px', objectFit: 'cover' }}
                />
              </td>
              <td>{player.playerProfile.displayName}</td>
              <td>{player.teamProfile.displayAbbr}</td>
              <td>{player.playerProfile.position}</td>
              <td>{player.playerProfile.height}</td>
              <td>{player.playerProfile.weight}</td>
              <td>{player.playerProfile.experience}</td>
              <td>{player.playerProfile.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Get;
