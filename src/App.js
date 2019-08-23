import React from 'react';
import Cards from './components/Cards';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: [],
    };
  }

  componentDidMount() {
    fetch('/api/cards')
      .then(res => res.json())
      .then(result => result.filter(minions => minions.type === 'Minion'))
      .then(cardInfos => this.setState({cardData: cardInfos,}));
  }

  render() {
    return (
      <div className="container">
        <h3 
          className='pageTitle'
        >
          Hearthstone Card Brawl
        </h3>
        <Cards 
          cardData={this.state.cardData}
        />
      </div>
    );
  }
}