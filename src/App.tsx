import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string, 
    age: number, 
    url: string, 
    note? : string
  }[]
}

function App() {
  // const [number, setNumber] = useState<number>(5);  

  // const changeNumber = () => {
  //   setNumber(10)
  // }

  const [people, setPeople] = useState<IState["people"]>([
    {
      name : "Lenka",
      age: 24, 
      url : "https://i.pinimg.com/280x280_RS/83/32/35/833235a43e3aaf563eee130c430ba886.jpg",
      note: "I made this app!"
    },
    {
      name : "You",
      age: 0, 
      url : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      note: "I would love for you to come!"
    }, 
    {
      name : "Bill Gates",
      age: 65, 
      url : "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
      note: "Too much? :D "
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;


// useState hook is responsible for storing data inside of a component 
// interface defines the syntax for classes to follow, they facilitate not just object-oriented programming but also type-checking 
// in react we pass data through props 