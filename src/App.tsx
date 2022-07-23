import React, { useState } from 'react';
import './App.css';
import List from './component/List'
import AddToList from './component/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Michael Jackson",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.albawaba.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fdefault%2Fpublic%2F2020-08%2Fmichael%2520jacksonn.jpg%3Fitok%3D6aXxQmQP&f=1&nofb=1",
      age: 36,
      note: "Allergic to potatoes..."
    }
  ])

  return (
    <div className="App">
      <h1>Party List</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
