
const figures = ['rock', 'paper', 'scissor'];

const incrementFigure = (currentFigure) => {
    const nextIndex = (figures.indexOf(currentFigure) + 1) % figures.length;
    return figures[nextIndex];
};

const recievedOpponentPiece = (figure) => {
    return {
        type: 'RECIEVED_OPPONENT__PIECE',
        figure
    };
};

const decideVictor = (myFigure, theirFigure) => {
    const status = myFigure === 'rock' ? (theirFigure === 'rock' ? 'tie' : (theirFigure === 'scissor' ? 'win' : 'lose')) :
                 (myFigure === 'paper' ? (theirFigure === 'paper' ? 'tie' : (theirFigure === 'paper' ? 'win' : 'lose')) :
                 (myFigure === 'scissor' ? (theirFigure === 'scissor' ? 'tie' : (theirFigure === 'rock' ? 'win' : 'lose')) : 'lose'));

    return {
        type: 'SET_VICTOR',
        status
    };
};

export const nextFigure = (currentFigure) => {
    return {
        type: 'SET_FIGURE',
        figure: incrementFigure(currentFigure)
    };
};

const decidedPiece = () => {
    return {
        type: 'DECIDED_PIECE'
    };
};

export const waitingForPiece = (myFigure) => {
    return (dispatch, getState) => {
        dispatch(decidedPiece());
        setTimeout(()=> {
            dispatch(recievedOpponentPiece('scissor'));
            dispatch(decideVictor(getState().piece, getState().opponent.figure));
        }, 3000);
    };
};
