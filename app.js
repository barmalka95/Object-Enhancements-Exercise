// Same keys and values ES2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
};


// Computed Property Names ES2015
let favoriteNumber = 42;
let instructor1 = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
};


// Object Methods ES2015
let instructor = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
};


// createAnimal function
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    };
};
