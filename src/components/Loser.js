import React from 'react';

class CardArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardProperties: []
    };
  }

  render() {
    let cardId = this.props.card;

    return (
      <div className="form-group">
          <img
            className="minion "
            style={{
              filter: 'grayscale(100)'
            }}
            alt="Selected Minion"
            src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/${cardId}_premium.gif`}
          />
          <h1
            className="loser"
          >
            LOSER!
          </h1>
      </div>
    );
  }
}

export default CardArt;
