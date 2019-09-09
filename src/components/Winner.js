import React from 'react';

export default class Winner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {card} = this.props;

    return (
      <div className="form-group mx-auto">
          <img
            className="minion "
            alt="Selected Minion"
            src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/${card}_premium.gif`}
          />
          <h1
            className="winner"
          >
            Winner!
          </h1>
      </div>
    );
  }
}
