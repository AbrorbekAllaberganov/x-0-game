import React from 'react';
import Cell from "./Cell";

function Board(props) {


    return (
        <div id={"board"}>
            {
                props.cellValues.map((val, idx) => {
                    const isHighlight =
                        props.winnerCombination && props.winnerCombination.indexOf(idx) >= 0
                    return <Cell
                        key={idx}
                        value={val}
                        isHighlight={isHighlight}
                        showCase={()=>props.cellClicked(idx)}
                    />
                })
            }
        </div>
    );
}

export default Board;