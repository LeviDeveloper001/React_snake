import { defaultMatrixItemData } from "./data";

export function copy(target, source) {
    Object.assign(target, source);
    return target;
}

const objTypes = [Array, Object];

export function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
        obj1 == null ||
        obj2 == null ||
        typeof obj1 !== "object" ||
        typeof obj2 !== "object"
    ) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

export function itemInArray(searchingItem, array) {
    for (let item of array) {
        if (deepEqual(item, searchingItem)) return true;
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
    let [x, y] = [itemData.x, itemData.y];
    if (itemInArray(x, [0, sizeX - 1]) || itemInArray(y, [0, sizeY - 1]))
        return true;
    return false;
}

function makeMatrixItemData(x, y, sizeX, sizeY) {
    let itemData = makeDefaultMatrixItemData(x, y);
    itemData.isWall = itemIsWall(itemData, sizeX, sizeY);
    return itemData;
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

export function getFieldCoords(fieldData) {
    return [fieldData.x, fieldData.y];
}
