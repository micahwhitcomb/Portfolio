// Main Class

class PlayingCard {
    constructor(name, region, strength) {
        this._name = name;
        this._region = region;
        this._strength = strength;
    }

    get name() {
        return this._name;
    }

    get region() {
        return this._region;
    }

    get strength() {
        return this._strength;
    }
}

// CARD LIST

const elephantCard = new PlayingCard ('Elephant', 'Plains', 6);

const lionCard = new PlayingCard ('Lion', 'Plains', 5);

const giraffeCard = new PlayingCard ('Giraffe', 'Plains', 4);

const rhinoCard = new PlayingCard ('Rhinoceros', 'Plains', 3);

const gazelleCard = new PlayingCard ('Gazelle', 'Plains', 2);