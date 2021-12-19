import React, { useState } from 'react';
import Data from './Data';
import './App.css';

<pre>{process.env.REACT_APP_BACKEND_URL}</pre>

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

function App() {

  const [Info, setInfo] = useState([]);

  function fetch_data(e) {

    const resp = fetch(BACKEND_URL).then(response => response.json()).then((data) => { return data });

    const get_details = async () => {

      const details = await resp;

      return details;

    };

    get_details().then(data => {
      let new_data = data;
      setInfo(new_data);
    });

  }

  return (
    <>
      <h1>Fetch Random Data</h1>
      <br>
      </br>
      <button onClick={fetch_data}>Fetch</button>
      <br>
      </br>
      <Data data={Info} />
    </>
  );
}

export default App;
