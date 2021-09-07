import React, { useState, useContext } from 'react';
import { DataContext } from './App'

function ChildComponent() {
  const data = useContext(DataContext)
  
  const [currentName, setCurrentName] = useState('')  
  const { name, setName } = data;

  const phrase = `I'm ${name}'s content`

  const handleUpdateName = () => {
    setName(currentName)
    setCurrentName('')
    console.log('name', name)    
    console.log('currentName', currentName)
  }

  return (
    <>
      <div className="Main">
        {phrase} 
        <br/><br/>
        <input type="text" value={currentName} onChange={e => setCurrentName(e.target.value)} />
        <button onClick={handleUpdateName}>Submit</button>
      </div>
    </>
  );
}

export default ChildComponent;
