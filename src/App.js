import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';

export const DataContext = React.createContext(null)

function App() {
  const [name, setName] = useState('Bob')

  return (
    <DataContext.Provider value={{name, setName}}>
      <div className="App">
        <header className="App-header">
          {`Hello World, ${name}!`}
        </header>
      </div>
      <ChildComponent />
    </DataContext.Provider >
  );
}

export default App;
