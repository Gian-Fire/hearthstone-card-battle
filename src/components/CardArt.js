import React from "react";

function determinesDraw(draw) {
  if (draw) {
    return 'grayscale(100%)';
  }
}

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
      <div className='form-group'>

        { !cardId 
          ? <img
            className="cardBack"
            alt="Legendary CardBack"
            src="https://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Legend.gif"
          /> 
          : <img
              className="minion "
              style={{
                filter: `${determinesDraw(this.props.draw)}`
              }}
              alt="Selected Minion"
              src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/${cardId}_premium.gif`}
          />
        }
        <div className='row'>
          <button
            className="btn-success"
            onClick={() => this.props.handleCardProperties(cardId)}
          >
            Confirm!
          </button>
        </div>

      </div>
    );
  }
}

export default CardArt;