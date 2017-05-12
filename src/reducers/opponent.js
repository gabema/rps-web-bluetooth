const states = [
    'deciding',
    'waiting for opponent',
    'win',
    'lose'
];

const defaultOpponentState = {
    status: states[0],
};

const opponent = (state = defaultOpponentState, action) => {
    switch (action.type) {
        default:
        return state;
    }
};

export default opponent;
