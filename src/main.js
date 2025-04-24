import TripModel from './model/trip-model.js';
import { initialTrips } from './mock/trips.js';
import TripFormPresenter from './presenter/trip-form-presenter.js';
import FilterPresenter from './presenter/trip-presenter.js';
import TripListPresenter from './presenter/trip-list-presenter.js';

const container = document.querySelector('.container');

const tripModel = new TripModel(initialTrips);
const tripListPresenter = new TripListPresenter(container, tripModel);
const tripFormPresenter = new TripFormPresenter(container, tripModel);
const filterPresenter = new FilterPresenter(container, tripModel, tripListPresenter);

tripFormPresenter.init();
filterPresenter.init();
tripListPresenter.init();
