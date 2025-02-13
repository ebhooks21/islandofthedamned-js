/**
 * Game.js -- File for the main game class.
 * @author Eric Hooks, 2025
 */

class Game {
	/**
	 * Main constructor for the Game class.
	 */
	constructor() {
		let self = this;
		self.GameState = GameState.MAIM_MENU;

		self.mainMenuController = new MainMenuController();
    }

	/**
	 * Function to start the Game.
	 */
	start() {
		let self =  this;

		//Setup the main menu area and show it
		(self.mainMenuController).registerOnClickFunctions();
		(self.mainMenuController).displayMainMenu();
	}
}