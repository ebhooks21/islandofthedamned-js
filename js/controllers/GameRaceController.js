/**
 * GameRaceController.js -- File to store functions applicable to controlling the Game's character races.
 * @author Eric Hooks, 2025
 */

class GameRaceController {
	/**
	 * Main constructor for the GameRaceController class.
	 */
	constructor(game) {
        let self = this;

        self.game = game;
		self.races = [];

		self.init();
    }

	/**
     * Function to initialize the race data.
     */
	init() {
		let self = this;

		let tempStatBlock = new StatBlock(5, 5, 5, 5, 5, 5); 
		let tempRace = new Race("Human", "The most common and versitle of races, Humans populate a large portion of the planet. They are well known for being able to perform almost any job class.", tempStatBlock);

		(self.races).push(tempRace);

		tempStatBlock = null;
		tempRace = null;

		tempStatBlock = new StatBlock(8, 3, 4, 3, 7, 5);
		tempRace = new Race("Dwarf", "Seen as the hardiest and stoutest of the races, Dwarves are known for their impressive strength and craftsmanship. Often found living in mountain strongholds, these creatures are known to be good with anything that requries a strong arm.", tempStatBlock);
		
        (self.races).push(tempRace);

		tempStatBlock = null;
        tempRace = null;

		tempStatBlock = new StatBlock(4, 6, 8, 5, 3, 4);
        tempRace = new Race("Elf", "Elves are creatures of the woods, often seen as wise and strong. They are known for their ability to communicate with other creatures, including humans, through the magic of their elven language. They are also known for their love of the forest and its natural beauty.", tempStatBlock);

		(self.races).push(tempRace);

		tempStatBlock = null;
        tempRace = null;
	}
}