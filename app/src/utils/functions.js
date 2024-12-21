import { defaultMatrixItemData } from "./data";

function copy(target, source) {
    Object.assign(target, source);
    return target;
}

function itemInArray(searchingItem, array) {
    for (let item of array) {
        if (item === searchingItem) return true;
    }
    return false;
}

function getRandomNum(maxNum) {
    return Math.round(Math.random() * maxNum);
}

function makeDefaultMatrixItemData(
    x,
    y,
    isEmpty = true,
    haveSnake = false,
    haveApple = false,
    isWall = false
) {
    return {
        ...copy(defaultMatrixItemData),
        x: x,
        y: y,
        isEmpty: isEmpty,
        haveSnake: haveSnake,
        haveApple: haveApple,
        isWall: isWall,
    };
}

function itemIsWall(itemData, sizeX, sizeY) {
    if (itemData.x === sizeX || itemData.y === sizeY) return true;
    return false;
}

function makeMatrixItemData(x, y, sizeX, sizeY) {
    let itemData = makeDefaultMatrixItemData(x, y);
    itemData.isWall = itemIsWall(itemData, sizeX, sizeY);
    
}

export function makeDefaultMatrixData(sizeX = 10, sizeY = 10) {
    let matrix, matrixRow, matrixItem;
    matrix = [];
    for (let x = 0; x < sizeX; x++) {
        matrixRow = [];
        for (let y = 0; y < sizeY; y++) {
            matrixItem = makeMatrixItemData(x, y, sizeX, sizeY);
            matrixRow.push(matrixItem);
        }
        matrix.push(matrixRow);
    }
    return matrix;
}
