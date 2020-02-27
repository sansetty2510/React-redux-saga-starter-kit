import React from 'react';

const Home = props => (
  <div>
    <button type="button" onClick={props.getCharacter}>Test redux action</button>
    <pre>
      {
        JSON.stringify(props.charaterData.name)
      }
    </pre>
  </div>
);

export default Home;
