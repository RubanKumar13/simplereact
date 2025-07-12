import React, { useEffect, useState } from 'react';

function Getapi() {

    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://in.global.nba.com/stats2/league/playerlist.json?locale=en')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  },[]);
     console.log(data);

  return (
    <div>
     <h1>JSON Data</h1>
     <table>
        <tr>
            <th>NAME</th>
            <th>TEAM</th>
            <th>POS</th>
            <th>HT</th>
            <th>WT</th>
            <th>EXP</th>
            <th>COUNTRY</th>
        </tr>
        
        {data.map((item,index) => (
        <tr key={index}>
          <td>{item.payload.players.playerProfile.displayName}</td>
        </tr>
      ))}
     </table>
   </div>
  )
}

export default Getapi
