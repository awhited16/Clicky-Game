// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// render() {
// function App() {
//   return (
//     <div>
//       <h1 className="text-left">Clicky Game</h1>
//       <h2 className="text-right">Score: this.state.score | Top Score: this.state.topScore</h2>
//       <h1 className="text-center">
//         Clicky Game!
//       </h1>
//       <p>Click on an image to earn points, but don't click on the same image twice!</p>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Score from "./components/Score";
import pups from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    pups,
    clickedPuppyIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)){
      this.setState({ clickedPuppyIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });

      for (let i = pups.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pups[i], pups[j]] = [pups[j], pups[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <NavBar>
          {this.state.pups.map(puppy => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </NavBar>
        <footer>
          <p>Clicky Game!</p>
        </footer>
    </div>
    );
  }
}

export default App;