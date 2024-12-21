import styles from "./App.module.css";

import Main from "../Main/Main";

import { React, useState } from "react";

import { makeDefaultMatrixData } from "../../utils/functions";

function setDefaultGameMatrix(sizeX = 10, sizeY = 10) {
    return makeDefaultMatrixData(sizeX, sizeY);
}

function setDefaultGame(sizeX = 10, sizeY = 10) {
    let game = {
        matrix: setDefaultGameMatrix(sizeX, sizeY),
        sizeX,
        sizeY,
    };
    return game
}

function App() {
    let [curGame, setGame] = useState(setDefaultGame());

    console.log(curGame);

    return (
        <>
            <Main curGame={curGame} />
        </>
    );
}

export default App;
