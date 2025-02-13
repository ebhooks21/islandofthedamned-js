/**
 * MainMenuController.js -- File to hold the main menu controller.
 * @author Eric Hooks, 2025
 */

class MainMenuController {
	/**
	 * Constructor for the MainMenu.
	 */
	constructor(game) {
		let self = this;
		self.game = game;
    }

	/**
	 * Function to register the onclick functions for this controller.
	 */
	registerOnClickFunctions() {
		$('#mainmenu-newgamebutton').on('click', () => {
			this.newGameButtonOnClick();
		});
	}

	/**
	 * Function to unregister the onclick functions for this controller.
	 */
	unregisterOnClickFunctions() {
        $('.mainmenu-button').off('click');
    }

	/**
	 * Function for the New Game Button onclick.
	 */
	newGameButtonOnClick() {
		let self = this;

		alert("HERE");
	}

	/**
	 * Function to display the main menu.
	 */
	displayMainMenu() {
		let self = this;

		//Hide the other areas
		self.hideAllGameContentAreas();

		//Show the main menu area
        $('#mainmenuarea').show();
	}
}
