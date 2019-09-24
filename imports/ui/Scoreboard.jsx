import React from "react";
import PropTypes from "prop-types";

const ScoreBoard = props => {
  return (
    <div>
      {props.players.map((p,i) => (
        <div key={i}>{p.name}</div>
      ))}
    </div>
  );
};

ScoreBoard.propTypes = {
  players : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ScoreBoard;
