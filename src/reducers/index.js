
import { combineReducers } from 'redux';
import opponent from './opponent';

const piece = (state = 'rock', action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return [
    //     ...state,
    //     todo(undefined, action)
    //   ]
    // case 'TOGGLE_TODO':
    //   return state.map(t =>
    //     todo(t, action)
    //   )
    case 'SET_FIGURE':
        return action.figure;
    default:
      return state
  }
}

const rockPaperScissorsApp = combineReducers ({piece, opponent});

export default rockPaperScissorsApp;