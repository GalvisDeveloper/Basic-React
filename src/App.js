

import React, { useState } from 'react';
import Overview from './components/Overview';
/* import MyComponent from './components/MyComponent'; */

const App = () => {

  const [lista, setLista] = useState(['Uno', 'Dos', 'Tres', 'Four']);

  return (
    <div>

      <h1>Testeando App</h1>
      <Overview setLista={setLista} />

      <ol>
        {
          lista.map(aList => {
            return <li key={aList}> {aList} </li>
          })
        }
      </ol>
    </div>
  );
};

export default App;
