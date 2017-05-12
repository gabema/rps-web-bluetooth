
const figures = ['rock', 'paper', 'scissor'];

const incrementFigure = (currentFigure) => {
    let nextIndex = (figures.indexOf(currentFigure) + 1) % figures.length;
    return figures[nextIndex];
};

export const nextFigure = (currentFigure) => {
    return {
        type: 'SET_FIGURE',
        figure: incrementFigure(currentFigure)
    };
};
