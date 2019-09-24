import React, { useState } from "react";
import PropTypes from "prop-types";

import { withTracker } from "meteor/react-meteor-data";


import {Players} from "../api/players.js";

import ScoreBoard from "./Scoreboard.jsx";

const App = (props) => {
  const [name, setName] = useState("");

  // const players = [{ name: "John", votes: 99 }];

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleKeyPressed = evt => {
    if (evt.key === "Enter") {
      console.log("Enter the game", name);

      Players.insert({
        name:name,
        votes: 1
      })
    }
  };

  return (
    <div>
      <h1>Voting</h1>

      <div className="row">
        <div className="col-4">
          <label>
            Enter your name to start playing
            <input
              value={name}
              onChange={handleChangeName}
              onKeyPress={handleKeyPressed}
              type="text"
              placeholder="Name"
            />
          </label>
        </div>{" "}
        {/* col-4 */}
        <div className="col-8">
          <h2>Scoreboard</h2>

          <ScoreBoard players={props.players}></ScoreBoard>
        </div>
      </div>
    </div>
  );
};



App.propTypes = {
  players : PropTypes.arrayOf(PropTypes.object).isRequired
};


export default withTracker(
  () => ({
    players: Players.find({}).fetch()
  }))(App);







