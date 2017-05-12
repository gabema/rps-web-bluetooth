import { connect } from 'react-redux';
import Game from '../components/Game';
import { nextFigure } from '../actions';

const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    figure: state.piece,
    status: state.opponent.status,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onTodoClick: (id) => {
    //   dispatch(toggleTodo(id))
    // }
    onChangePiece: (currentFigure) => {
        dispatch(nextFigure(currentFigure))
    },
    onPlayPiece: () => {

    },
  }
};

const LiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default LiveGame;