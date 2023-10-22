import { Ship, Board, Player, Game } from "./game.js";
import { RenderGame } from "./render.js";

const board = Board();
const renderGame = RenderGame();
renderGame.renderGrid(board); //add event listener to trigger rerendering on screen resize
renderGame.createShipsToPlace();
renderGame.dragElement(board);

renderGame.giveShipToPlace();
renderGame.flipShip();
