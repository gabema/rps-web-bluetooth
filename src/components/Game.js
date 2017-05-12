import React from 'react';
import Piece from './Piece.js';
import PropTypes from 'prop-types';

const Game = ({figure, onChangePiece, onPlayPiece, status}) => (
    <div>
      <Piece figure={figure} onClick={() => onChangePiece(figure)} />
      <input type="button" value="Shoot!" onClick={() => onPlayPiece(figure)} />
      <div>{status}</div>
    </div>
);

Game.prototype.PropTypes = {
    figure: PropTypes.string.isRequired,
    onChangePiece: PropTypes.func.isRequired,
};

export default Game;