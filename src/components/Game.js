import React, {useState} from 'react';
import Board from "./Board";
import Modal from "./Modal";
import {calculateWinner} from "./utils/calculateWinner";

function Game() {
    const [cellValues, setCellValues] = useState(["", "", "", "", "", "", "", "", ""])
    const [counter, setCounter] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)
    const [winner, setWinner] = useState()
    const [winnerCombination, setWinnerCombination] = useState([])

    // let winnerCombination = [];

    const cellClick = (cellIndex) => {
        if (cellValues[cellIndex] === "") {
            const newCell = [...cellValues];

            if (counter % 2 === 0)
                newCell[cellIndex] = "X"
            else
                newCell[cellIndex] = "0"
            setCellValues(newCell)

            const calcResult = calculateWinner(newCell, cellIndex, counter);

            setCounter(counter + 1)
            setIsGameOver(calcResult.hasResult)
            setWinner(calcResult.winner)
            setWinnerCombination(calcResult.winningCombination);
            console.log(winnerCombination)
        }
    }

    const newGame = () => {
        setCounter(0)
        setCellValues(["", "", "", "", "", "", "", "", ""])
        setWinner(undefined)
        setWinnerCombination([])
        setIsGameOver(false)
    }

    return (
        <>
            <div id={"game"}>
                <h1>The Best Game For Waste Time</h1>
                <Board
                    cellValues={cellValues}
                    winnerCombination={winnerCombination}
                    cellClicked={cellClick}
                />
            </div>
            <Modal isGameOver={isGameOver} winner={winner} newGame={newGame}/>
        </>
    );
}

export default Game;