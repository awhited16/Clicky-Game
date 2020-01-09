import React, { Component } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Score from "./components/Score";
import candy from "./cards.json";
import "./App.css";

class App extends Component {
  // This is stateful. Includes candy from cards.json, array of selections, score, goal, and status
  state = {
    candy,
    selections: [],
    score: 0,
    goal: 9,
    status: ""
  };

  //shuffle cards on click
  shuffleCards = id => {
    let selections = this.state.selections;

    if(selections.includes(id)){
      this.setState({ selections: [], score: 0, status:  "Oh no! You've already clicked that candy. Try again!" });
      return;
    }else{
      selections.push(id)

      if(selections.length === 9){
        this.setState({score: 9, status: "You Won! Great job clicking all 9 candies. Can you win again?", selections: []});
        console.log('You Win');
        return;
      }

      this.setState({ candy, selections, score: selections.length, status: " " });

      for (let i = candy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [candy[i], candy[j]] = [candy[j], candy[i]];
      }
    }
  }

  // Render the basic page html, score, navbar, and card
  render() {
    return (
      <div className="Game">
        <header>
          <h1>The Candy Clicky Game</h1>
          <p>
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={9}
               status={this.state.status}
               />
        <NavBar>
          {this.state.candy.map(candyCard => (
            <Card
              shuffleCards={this.shuffleCards}
              id={candyCard.id}
              key={candyCard.id}
              image={candyCard.image}
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