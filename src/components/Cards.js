import React from "react";
import CardArt from './CardArt';
import Loser from './Loser';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      leftCard: '',
      rightCard: '',
      leftCardAttributes: null,
      rightCardAttributes: null,
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

  handleCardProperties(leftCard, rightCard) {
    const properties = this.props.cardData;
    let leftAttributes;
    let rightAttributes;

    properties.map( (attributes) => {
      if (attributes.cardId === leftCard) {
        leftAttributes = attributes;
      }
      if (attributes.cardId === rightCard) {
        rightAttributes = attributes
      }
    })

    this.setState({ 
      leftCardAttributes: leftAttributes,
      rightCardAttributes: rightAttributes
    });
  }

  handleBrawl(leftCard, rightCard) {
    let leftHealth = leftCard.health - rightCard.attack;
    let rightHealth = rightCard.health - leftCard.attack;
    let winner;
    let loser;
    let isDraw;

    if (leftHealth > 0 ) { 
      winner = leftCard.cardId;
      loser = rightCard.cardId;
      this.setState({winner: winner, loser: loser})
    } else if (rightHealth > 0) {
      winner = rightCard.cardId;
      loser = leftCard.cardId;
      this.setState({winner: winner, loser: loser})
    } else if (leftHealth && rightHealth > 0) {
      isDraw = true;
      this.setState({ draw: isDraw})
    } else {
      isDraw = true;
      this.setState({ draw: isDraw})
    } 
  }
  
  render() {
    const { 
      winner, 
      loser, 
      draw, 
      leftCard, 
      rightCard, 
      rightCardAttributes, 
      leftCardAttributes 
    } = this.state;

    return (
      <div className="row">

        <div className="col-md-6">
          <div 
            className='row'
            style={{
              marginLeft: 150 
            }}
          >
            <label>Player One, Choose Your Minion:</label>
          </div>
          <div 
            className='row'
            style={{
              marginLeft: 150 
            }}
          >
            <select 
              id='leftCard'
              name="leftCard" 
              onChange={this.handleChange}
              required
            >
              <option value='' disabled selected>Select</option>
              {this.props.cardData.map(card => (
                <option key={card.cardId} value={card.cardId} >
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
          <div 
            className='row'
            style={{
              marginLeft: 150 
            }}
          >
            <label>Player Two, Choose Your Minion:</label>
          </div>
          <div 
            className='row'
            style={{
              marginLeft: 150 
            }}
          >
            <select 
              id='rightCard'
              name="rightCard" 
              onChange={this.handleChange}
              required
              >
              <option value='' disabled selected>Select</option>
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
          {
            winner || loser || draw === true
            ?
              <button
                type='button'
                className="btn btn-primary btn-block"
                onClick={ () => location.reload()}
              >
                Reset
              </button>
            :
              rightCardAttributes && leftCardAttributes !== null || undefined
              ?
                <button
                  type='button'
                  className="btn btn-danger btn-block"
                  onClick={ () => this.handleBrawl(this.state.leftCardAttributes, this.state.rightCardAttributes)}
                >
                  FIGHT!!!
                </button>
              :
                <div className='col-md-12'>
                  <h3
                    id='brawlConfirm'
                    className='text-center'
                  >
                    Please select and confirm your minions.
                  </h3>
                  <button
                    type='button'
                    className="btn btn-success btn-block"
                    onClick={ () => this.handleCardProperties(this.state.leftCard, this.state.rightCard)}
                  >
                    CONFIRM!!!
                  </button>
                </div>
          }
        </div>

      </div>
    );
  }
}
