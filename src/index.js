import _ from 'lodash';
import './style.css';
const functions = require('./module.js')
const Ship = functions.Ship;
const GameBoard = functions.GameBoard;
const Player = functions.Player;

let boardOne = GameBoard('boardOne', 1);
boardOne.createBoardObject();
boardOne.createBoardDiv();

let boardTwo = GameBoard('boardTwo', 2);
boardTwo.createBoardObject();
boardTwo.createBoardDiv();


console.log(boardTwo)