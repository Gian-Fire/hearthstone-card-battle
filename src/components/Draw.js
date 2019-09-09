import React from 'react';

export default class Draw extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {card} = this.props;

    return (
      <div className="form-group mx-auto">
          <img
            className="minion "
            style={{ filter: 'grayscale(100%)' }}
            alt="Selected Minion"
            src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/${card}_premium.gif`}
          />
          <h1
            className="draw"
          >
            DRAW!
          </h1>
      </div>
    );
  }
}
