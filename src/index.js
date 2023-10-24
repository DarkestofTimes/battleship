import { Ship, Board, Player, Game } from "./game.js";
import { RenderGame } from "./render.js";

const game = Game();
const board = game.human.board;
const renderGame = RenderGame(game);
renderGame.changeScreen(game);
renderGame.renderGrid(board); //add event listener to trigger rerendering on screen resize
renderGame.createShipsToPlace();
renderGame.dragElement(board);
renderGame.giveShipToPlace();
renderGame.flipShip();
