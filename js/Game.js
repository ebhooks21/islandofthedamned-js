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

		//Hide all the game content areas
		self.hideAllGameContentAreas();

		self.mainMenuController = new MainMenuController(self);
		self.newCharacterController = new NewCharacterController(self);
		self.gameRaceController = new GameRaceController(self);
		self.gameEntityClassController = new GameEntityClassController(self);
    }

	/**
	 * Function to start the Game.
	 */
	start() {
		let self =  this;

		self.stateChanged();	
	}

	/**
	 * Function for when the game state changes.
	 */
	stateChanged() {
		let self = this;

		//Check the state and call the appropriate controller
		switch(self.GameState) {
			case GameState.MAIM_MENU:
				(self.mainMenuController).registerOnClickFunctions();
                (self.mainMenuController).displayMainMenu();
                break;

			case GameState.NEW_CHARACTER:
                (self.newCharacterController).registerOnClickFunctions();
                (self.newCharacterController).displayNewCharacterArea();
                break;
		}
	}

	/**
	 * Function to hide all game content areas.
	 */
	hideAllGameContentAreas() {
        let self = this;

		$('.gamecontentarea').hide();
    }
}