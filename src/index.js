import { Ship, Board, Player, Game } from "./game.js";
import { RenderGame } from "./render.js";

const game = Game();
const renderGame = RenderGame(game);
renderGame.initGame();
