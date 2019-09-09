import React from "react";

export default class CardArt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {card} = this.props;

    return (
      <div className='form-group mx-auto'>

        { !!card 
          ? <img
              className="minion "
              alt="Selected Minion"
              src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/${card}_premium.gif`}
            />
          : <img
              className="cardBack"
              alt="Legendary CardBack"
              src="https://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Legend.gif"
            /> 
        }


      </div>
    );
  }
}
