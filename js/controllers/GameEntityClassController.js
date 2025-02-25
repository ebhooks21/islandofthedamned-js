/**
 * GameEntityClassController.js -- File to store functions applicable to controlling the Game's entity classes.
 * @author Eric Hooks, 2025
 */

class GameEntityClassController {
	/**
	 * Main constructor for the GameEntityClassController class.
	 */
	constructor(game) {
        let self = this;

        self.game = game;
		self.classes = [];

		self.init();
    }

	/**
     * Function to initialize the class data.
     */
	init() {
		let self = this;

		let tempStatBlock = new StatBlock(3, 2, -2, -2, 3, 0); 
		let tempClass = new EntityClass("Warrior", "A class known for its brute strength and abundunt charisma, able to easily overcome almost any enemy that stands in its way.", tempStatBlock);

		(self.classes).push(tempClass);

		tempStatBlock = null;
		tempClass = null;

		tempStatBlock = new StatBlock(-3, 2, 4, 2, -3, 2);
		tempClass = new EntityClass("Mage", "A user of the powerful Arcana of Magic, mages are well known for weaving spells out of thin air. They are also known for their lesser strength and constitution.", tempStatBlock);
		
        (self.classes).push(tempClass);

		/*tempStatBlock = null;
        tempRace = null;

		tempStatBlock = new StatBlock(-1, 1, 3, 0, -2, -1);
        tempRace = new Race("Elf", "Elves are creatures of the woods, often seen as wise and strong. They are known for their ability to communicate with other creatures, including humans, through the magic of their elven language. They are also known for their love of the forest and its natural beauty.", tempStatBlock);

		(self.races).push(tempRace);

		tempStatBlock = null;
        tempRace = null;*/
	}
}