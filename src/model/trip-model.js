import { generateID } from '../utils.js';

export default class TripModel {
    #trips = [];
    #observers = [];

    constructor(trips) {
        this.#trips = trips;
    }

    get trips() {
        return this.#trips;
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    _notifyObservers() {
        this.#observers.forEach(observer => observer());
    }

    addTrip(tripData) {
        const newTrip = { id: generateID(), ...tripData };
        this.#trips.push(newTrip);
        this._notifyObservers();
        return newTrip;
    }

    removeTrip(id) {
        this.#trips = this.#trips.filter(trip => trip.id !== id);
        this._notifyObservers();
    }

    updateTrip(id, updatedData) {
        const index = this.#trips.findIndex(trip => trip.id === id);
        if (index !== -1) {
            this.#trips[index] = { ...this.#trips[index], ...updatedData };
            this._notifyObservers();
        }
    }
}
