import { connect } from 'react-redux';
import Game from '../components/Game';
import { nextFigure, waitingForPiece } from '../actions';

const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    figure: state.piece,
    status: state.opponent.status,
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    onChangePiece: (currentFigure) => {
        dispatch(nextFigure(currentFigure));
    },
    onPlayPiece: (figure) => {
        dispatch(waitingForPiece(figure));
    },
  }
};

const LiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default LiveGame;