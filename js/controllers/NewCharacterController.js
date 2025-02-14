/**
 * NewCharacterController.js -- File to hold the new character controller.
 * @author Eric Hooks, 2025
 */

class NewCharacterController {
	/**
	 * Constructor for the NewCharacterController.
	 */
	constructor(game) {
		let self = this;
		self.game = game;
    }

	/**
	 * Function to register the onclick functions for this controller.
	 */
	registerOnClickFunctions() {
		/*$('#mainmenu-newgamebutton').on('click', () => {
			this.newGameButtonOnClick();
		});*/
	}

	/**
	 * Function to unregister the onclick functions for this controller.
	 */
	unregisterOnClickFunctions() {
        //$('.mainmenu-button').off('click');
    }

	/**
	 * Function for the New Game Button onclick.
	 */
	newGameButtonOnClick() {
		let self = this;

		//Hide the main menu area
		(self.game).hideNewCharacterArea();

		//Swap states and alert the game object
		(self.game).GameState = GameState.NEW_CHARACTER;
		(self.game).stateChanged();
	}

	/**
	 * Function to display the new character area.
	 */
	displayNewCharacterArea() {
		let self = this;

		//Hide the other areas
		(self.game).hideAllGameContentAreas();

		//Show the main menu area
        $('#newcharacterarea').show();

		//Build the area with the character races
        self.buildCharacterRaceSelectionArea();
    }

    /**
     * Function to build the character race selection area.
     */
	buildCharacterRaceSelectionArea() {
		let self = this;

		let html = "";
		let state = "";
		let races = ((self.game).gameRaceController).races;

		for(let r in races) {
			html += "<div class='form-check'>";

			if(races[r].name == "Human") {
				state = "checked";
			}

			else {
				state = "";
			}

			html += "<input class='form-check-input' type='radio' name='newcharacterform-raceradio' id='newcharacterform-" + races[r].name + "=raceradiooption' " + state + ">";
			html += "<label class='form-check-label' for='newcharacterform-'" + races[r].name + "=raceradiooption'>" + races[r].name + "</label>";

			html += "</div>";
		}

		$("#newcharacterform-racelistingarea").html(html);
	}

	/**
	 * Function to hide the main menu area
	 */
	hideNewCharacterArea() {
		let self = this;

		$('#newcharacterarea').hide();
		self.unregisterOnClickFunctions();
	}
}