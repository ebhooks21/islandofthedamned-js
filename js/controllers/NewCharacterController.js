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

		//Build the area for the character classes
		self.buildCharacterClassSelectionArea();
    }

	/**
	 * Function to build the character stats area.
	 */
	buildCharacterStatsArea() {
		let self = this;

		//Get the character's currently selected race
		let race = self.getSelectedCharacterRace();

		//Get the character's currently selected class
		let characterClass = self.getSelectedCharacterClass();

        //Update the character stats area with the selected race's stats block
		let baseStatBlock = new StatBlock(5, 5, 5, 5, 5, 5,);	

		//Update the base stat block with the race stat information
		baseStatBlock.strength += ((race.statblock).strength + (characterClass.statblock).strength);
		baseStatBlock.agility += ((race.statblock).agility + (characterClass.statblock).agility);
		baseStatBlock.intelligence += ((race.statblock).intelligence + (characterClass.statblock).intelligence);
		baseStatBlock.charisma += ((race.statblock).charisma + (characterClass.statblock).charisma);
		baseStatBlock.constitution += ((race.statblock).constitution + (characterClass.statblock).constitution);
		baseStatBlock.luck += ((race.statblock).luck + (characterClass.statblock).luck);

		//Update the stat display
		$('#newcharacterarea-statsarea-strength').val(baseStatBlock.strength);
        $('#newcharacterarea-statsarea-agility').val(baseStatBlock.agility);
        $('#newcharacterarea-statsarea-intelligence').val(baseStatBlock.intelligence);
        $('#newcharacterarea-statsarea-charisma').val(baseStatBlock.charisma);
        $('#newcharacterarea-statsarea-constitution').val(baseStatBlock.constitution);
        $('#newcharacterarea-statsarea-luck').val(baseStatBlock.luck);
	}

	/**
	 * Function to get the selected character race.
	 */
	getSelectedCharacterRace() {
		let self = this;
		
		let races = ((self.game).gameRaceController).races;

		for(let r in races) {
			if($('#newcharacterform-' + races[r].name + '-raceradiooption').is(':checked')) {
				return races[r];
			}
		}
	}

	/**
	 * Function to get the selected character class.
	 */
	getSelectedCharacterClass() {
		let self = this;
		
		let classes = ((self.game).gameEntityClassController).classes;

		for(let c in classes) {
			if($('#newcharacterform-' + classes[c].name + '-classradiooption').is(':checked')) {
				return classes[c];
			}
		}
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
			html += "<span class='form-check float-lg-start me-lg-4'>";

			if(races[r].name == "Human") {
				state = "checked";
			}

			else {
				state = "";
			}

			html += "<input class='form-check-input' type='radio' name='newcharacterform-raceradio' id='newcharacterform-" + races[r].name + "-raceradiooption' " + state + ">";
			html += "<label class='form-check-label' for='newcharacterform-" + races[r].name + "-raceradiooption'>" + races[r].name + "</label>";	

			html += "</span>";
		}

		$('#newcharacterform-racelistingarea').html(html);

		for(let r in races) {
			//Set an onclick for each radio button, so that it updates the description area
			$("#newcharacterform-" + races[r].name + "-raceradiooption").on('click', () => {
				$('#newcharacterform-descriptiontitle').html(races[r].name);
				$('#newcharacterform-descriptiontext').html(races[r].description);

				//Change the character stats area
				self.buildCharacterStatsArea();
            });
		}
		//$('#newcharacterform-Human-raceradiooption').trigger('click');
	}

	/**
     * Function to build the character class selection area.
     */
	buildCharacterClassSelectionArea() {
		let self = this;

		let html = "";
		let state = "";
		let classes = ((self.game).gameEntityClassController).classes;

		for(let c in classes) {
			html += "<div class='form-check float-lg-start me-lg-4 col-12'>";

			if(classes[c].name == "Warrior") {
				state = "checked";
			}

			else {
				state = "";
			}

			html += "<input class='form-check-input' type='radio' name='newcharacterform-classradio' id='newcharacterform-" + classes[c].name + "-classradiooption' " + state + ">";
			html += "<label class='form-check-label' for='newcharacterform-" + classes[c].name + "-classradiooption'>" + classes[c].name + "</label>";	

			html += "</div>";
		}

		$('#newcharacterform-classlistingarea').html(html);

		for(let c in classes) {
			//Set an onclick for each radio button, so that it updates the description area
			$("#newcharacterform-" + classes[c].name + "-classradiooption").on('click', () => {
				$('#newcharacterform-descriptiontitle').html(classes[c].name);
				$('#newcharacterform-descriptiontext').html(classes[c].description);

				//Change the character stats area
				self.buildCharacterStatsArea();
            });
		}
		$('#newcharacterform-Warrior-classradiooption').trigger('click');
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
