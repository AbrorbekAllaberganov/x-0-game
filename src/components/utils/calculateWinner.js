const winningMatrix = {
    0: [[1, 2], [3, 6], [4, 8]],
    1: [[0, 2], [4, 7]],
    2: [[5, 8], [4, 6], [0, 1]],
    3: [[0, 6], [4, 5]],
    4: [[0, 8], [1, 7], [2, 6], [3, 5]],
    5: [[2, 8], [3, 4]],
    6: [[0, 3], [2, 4], [7, 8]],
    7: [[6, 8], [1, 4]],
    8: [[0, 4], [6, 7], [2, 5]]
}

export const calculateWinner = (cellVal, cellIndex, numberOfTurn) => {
    if (numberOfTurn === 8)
        return {
            hasResult: true,
            winner: undefined,
            winningCombination: []
        }
    const winningRange = winningMatrix[cellIndex];

    for (let i = 0; i < winningRange.length; i++) {
        const currentValue = cellVal[cellIndex];
        const firstOption = cellVal[winningRange[i][0]]
        const secondOption = cellVal[winningRange[i][1]]

        if (currentValue === firstOption && firstOption === secondOption) {
            return {
                hasResult: true,
                winner: currentValue,
                winningCombination: [cellIndex, winningRange[i][0], winningRange[i][1]]
            }
        }

    }

    return {
        hasResult: false,
        winner: undefined,
        winningCombination: []
    }
}