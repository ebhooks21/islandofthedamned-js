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

		self.mainMenuController = new MainMenuController();
    }

	/**
	 * Function to start the Game.
	 */
	start() {
		let self =  this;

		(self.mainMenuController).registerOnClickFunctions();
	}
}