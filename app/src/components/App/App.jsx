import styles from "./App.module.css";

import Main from "../Main/Main";

import { React, useState, useEffect } from "react";

import { defaultSnakeData } from "../../utils/data";
import { makeDefaultMatrixData, copy } from "../../utils/functions";

function setDefaultGameMatrix(sizeX = 10, sizeY = 10) {
    return makeDefaultMatrixData(sizeX, sizeY);
}

function setDefaultGameSnake(fieldsXY) {
    const snake = copy(defaultSnakeData);
    snake.fields = copy(fieldsXY);
    return snake;
}

function setGameSnake(prevGame) {
    const snake = copy(prevGame.snake);
    const prevGameCopy = copy(prevGame);
    snake.fields = prevGameCopy.snake.fields.map((f) => {
        return [
            f[0] + prevGameCopy.snake.moveX,
            f[1] + prevGameCopy.snake.moveY,
        ];
    });
    console.log(snake.fields);
    return snake;
}

function setDefaultGame(sizeX = 17, sizeY = 17) {
    let game = {
        matrix: setDefaultGameMatrix(sizeX, sizeY),
        snake: setDefaultGameSnake([
            [Math.round(sizeX / 2 - 1), Math.round(sizeY / 2 - 2)],
            [Math.round(sizeX / 2 - 1), Math.round(sizeY / 2 - 1)],
        ]),
        sizeX,
        sizeY,
    };
    return game;
}

function App() {
    let [curGame, setGame] = useState(setDefaultGame());

    useEffect(() => {
        const updateGameState = () => {
            setGame((prevGame) => {return moveUpdate(prevGame)});
        };
        const intervalId = setInterval(
            updateGameState,
            curGame.snake.moveSpeed
        );
        return () => clearInterval(intervalId);
    }, []);

    function moveUpdate(prevGame) {   
        return { ...prevGame, snake: setGameSnake(prevGame) };
    }

    console.log(curGame);

    return (
        <>
            <Main curGame={curGame} />
        </>
    );
}

export default App;
