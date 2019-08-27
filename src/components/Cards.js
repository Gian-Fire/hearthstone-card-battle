import React from "react";
import CardArt from './CardArt';
import Loser from './Loser';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      leftCard: '',
      rightCard: '',
      winner: false,
      loser: false,
      draw: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCardProperties = this.handleCardProperties.bind(this);
    this.handleBrawl = this.handleBrawl.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}

  handleCardProperties(id) {
    const properties = this.props.cardData;
    let chosenCard;
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].cardId === id) {
        chosenCard = properties[i];
      }
    }
    this.state.selectedCards.push(chosenCard);
    this.setState({ selectedCards: this.state.selectedCards});
  }

  handleBrawl(brawlers) {
    let leftHealth = brawlers[0].health - brawlers[1].attack;
    let rightHealth = brawlers[1].health - brawlers[0].attack;
    let winner;
    let loser;
    let isDraw;

    this.setState({
      winner: winner,
      loser: loser,
      draw: isDraw
    })
    

    if (leftHealth && rightHealth > 0) {
      isDraw = true;
      this.setState({ draw: isDraw})
    } else if (leftHealth > 0 ) { 
      winner = brawlers[0].cardId;
      loser = brawlers[1].cardId;
      this.setState({winner: winner, loser: loser})
    } else if (rightHealth > 0) {
      winner = brawlers[1].cardId;
      loser = brawlers[0].cardId;
      this.setState({winner: winner, loser: loser})
    } else {
      isDraw = true;
      this.setState({ draw: isDraw})
    } 
  }
  
  render() {
    const { winner, loser, leftCard, rightCard } = this.state;

    return (
      <div className=" row">

        <div className="col-md-6">
          <div className='row'>
            <label>Choose Your Minion:</label>
          </div>
          <div className='row'>
            <select 
              name="leftCard" 
              onChange={this.handleChange}
            >
              <option>Select</option>
              {this.props.cardData.map(card => (
                <option key={card.cardId} value={card.cardId}>
                  {card.name}
                </option>
              ))}
            </select>
          </div>
          <div className='row'>
            { leftCard === loser
              ? <Loser 
                card={this.state.leftCard}
                cardData={this.props.cardData}
                handleCardProperties={this.handleCardProperties}
                loser={this.state.loser}
              />
              : <CardArt
                  card={this.state.leftCard}
                  cardData={this.props.cardData}
                  handleCardProperties={this.handleCardProperties}
                  winner={this.state.winner}
                  loser={this.state.loser}
                  draw={this.state.draw}
                />
            }
          </div>
        </div>

        <div className="col-md-6">
          <div className='row'>
            <label>Choose Your Minion:</label>
          </div>
          <div className='row'>
            <select 
              name="rightCard" 
              onChange={this.handleChange}
              >
              <option>Select</option>
              {this.props.cardData.map(card => (
                <option key={card.cardId} value={card.cardId}>
                  {card.name}
                </option>
              ))}
            </select>
          </div>
          <div className='row'>
          {  rightCard === loser
            ? <Loser 
                card={this.state.rightCard}
                cardData={this.props.cardData}
                handleCardProperties={this.handleCardProperties}
                loser={this.state.loser}
              />
            : <CardArt
                card={this.state.rightCard}
                cardData={this.props.cardData}
                handleCardProperties={this.handleCardProperties}
                winner={this.state.winner}
                loser={this.state.loser}
                draw={this.state.draw}
              />
          }
          </div>
        </div>

        <div className='row col-md-8 mx-auto'>
          <button
            type='button'
            className="btn btn-danger btn-block"
            onClick={ () => this.handleBrawl(this.state.selectedCards, )}
          >
            FIGHT!!!
          </button>
        </div>

      </div>
    );
  }
}

export default Cards;