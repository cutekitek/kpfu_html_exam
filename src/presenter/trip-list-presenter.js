import { render, RenderPosition } from '../framework/render.js';
import TripListComponent from '../view/trip-list-component.js';
import TripItemComponent from '../view/trip-item-component.js';
import TripEditComponent from '../view/trip-edit-component.js';


export default class TripListPresenter {
    constructor(container, tripModel) {
        this._container = container;
        this._tripModel = tripModel;
        this._listComponent = new TripListComponent();
        this._filter = null
        this._tripModel.addObserver(this._onModelChange.bind(this));
    }

    init() {
        render(this._listComponent, this._container, RenderPosition.BEFOREEND);
        this._renderTrips();
    }

    setFilter(filter) {
        this._filter = filter;
        this._renderTrips();
    }

    _getFilteredTrips() {
        console.log(this._filter)
        return this._filter ? 
            this._tripModel.trips.filter(
            trip => (this._filter.from === null || trip.date > this._filter.from) && (this._filter.to === null || trip.date < this._filter.to)) : this._tripModel.trips;
    }

    _onModelChange() {
        this._renderTrips();
    }

    _renderTrips() {
        const listEl = this._listComponent.getListElement();
        listEl.innerHTML = '';
        this._getFilteredTrips().forEach(trip => {
            const item = new TripItemComponent(trip);
            render(item, listEl, RenderPosition.BEFOREEND);
            item.setDeleteHandler(() => this._tripModel.removeTrip(trip.id));

            item.setEditHandler(() => {
                const editComponent = new TripEditComponent(trip);
                const editEl = editComponent.element;
                listEl.replaceChild(editEl, item.element);

                editComponent.setSaveHandler(() => {
                    const updatedData = editComponent.getData();
                    this._tripModel.updateTrip(trip.id, updatedData);
                });

                editComponent.setCancelHandler(() => {
                    this._renderTrips();
                });
            });
        });
    }
}
