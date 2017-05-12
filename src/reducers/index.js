
import { combineReducers } from 'redux';

const states = [
    'deciding',
    'waiting for opponent',
    'win',
    'lose',
    'tie',
];

const piece = (state = 'rock', action) => {
  switch (action.type) {
    case 'SET_FIGURE':
        return action.figure;
    default:
      return state
  }
}

const defaultOpponentState = {
    status: states[0],
    figure: undefined
};

const opponent = (state = defaultOpponentState, action) => {
    switch (action.type) {
        case 'DECIDED_PIECE':
            return Object.assign({}, state, {status: states[1]});
        case 'RECIEVED_OPPONENT__PIECE':
            return Object.assign({}, state, {figure: action.figure});
        case 'SET_VICTOR':
            return Object.assign({}, state, {status: action.status});
        default:
        return state;
    }
};

const rockPaperScissorsApp = combineReducers ({piece, opponent});

export default rockPaperScissorsApp;