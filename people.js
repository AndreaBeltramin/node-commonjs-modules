const hobbies = require("./hobbies");
const getFullName = require("./names");

const fullName = getFullName("Mario", "Rossi");
const hobbiesOfPerson = hobbies("mare", "cucina", "libri");

const person = () => {
	return {
		firstName: fullName.firstName,
		lastName: fullName.lastName,
		hobbies: hobbiesOfPerson.hobbies,
	};
};
console.log(person());
