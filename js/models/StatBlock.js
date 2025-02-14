/**
 * StatBlock.js -- File to store the StatBlock model.
 * @author Eric Hooks, 2025
 */

class StatBlock {
	/**
	 * Main constructor for the StatBlock class.
	 */
	constructor(strength = 0, agility = 0, intelligence = 0, charisma = 0, constitution = 0, luck = 0) {
		let self = this;

		self.strength = strength;
        self.agility = agility;
        self.intelligence = intelligence;
        self.charisma = charisma;
        self.constitution = constitution;
        self.luck = luck;
	}
}