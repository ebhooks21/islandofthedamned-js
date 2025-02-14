/**
 * StatBlock.js -- File to store the StatBlock model.
 * @author Eric Hooks, 2025
 */

class StatBlock {
	/**
	 * Main constructor for the StatBlock class.
	 */
	constructor() {
		let self = this;

        self.strength = 0;
        self.agility = 0;
        self.intelligence = 0;
        self.charisma = 0;
        self.constitution = 0;
        self.luck = 0;
	}

	/**
	 * Secondary constructor for the StatBlock class.
	 */
	constructor(strength, agility, intelligence, charisma, constitution, luck) {
		let self = this;

		self.strength = strength;
        self.agility = agility;
        self.intelligence = intelligence;
        self.charisma = charisma;
        self.constitution = constitution;
        self.luck = luck;
	}
}