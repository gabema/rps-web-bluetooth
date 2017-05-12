import React from 'react';
import PropTypes from 'prop-types';

const Piece  = ({figure, onClick}) => (
    <div onClick={() => onClick()}>{figure}</div>
);

Piece.prototype.PropTypes = {
    figure: PropTypes.string.isRequired,
};

export default Piece;
