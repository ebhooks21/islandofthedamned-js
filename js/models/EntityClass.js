/**
 * EntityClass.js -- File to hold the EntityClass class, which represents a rpg class that an entity may have.
 * @author Eric Hooks, 2025
 */

class EntityClass {
	/**
	 * Main constructor for the EntityClass class.
	 */
	constructor(name, description, statblock) {
		let self = this;

		self.name = name;
        self.description = description;
        self.statblock = statblock;
	}
}