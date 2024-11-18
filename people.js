const hobbies = require("./hobbies");
const getFullName = require("./names");

const person = () => {
	return {
		name: getFullName("Mario", "Rossi"),
		hobbies: hobbies("mare", "cucina", "libri"),
	};
};
console.log(person());
