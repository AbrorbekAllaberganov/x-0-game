import React from 'react';
import classNames from "classnames";

function Modal(props) {
    const modalClasses = classNames({
        "modal-open": props.isGameOver
    })

    const msg = props.winner ? `winner ${props.winner}` : 'Draw'

    return (
        <div id="modal-overlay" className={modalClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{msg}</span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button id={"new-game-button"} onClick={props.newGame}>
                        Start New Game
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;