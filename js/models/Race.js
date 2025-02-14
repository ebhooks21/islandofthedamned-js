/**
 * Race.js -- File to hold the Race object, which describes an available race.
 * @author Eric Hooks, 2025
 */

class Race {
	/**
	 * Main constructor for the Race class.
	 */
	constructor(name, description, statblock) {
	    let self = this;

		self.name = name;
        self.description = description;
        self.statblock = statblock;
    }
}