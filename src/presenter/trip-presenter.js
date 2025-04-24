import { render, RenderPosition } from '../framework/render.js';
import TripFilterComponent from '../view/trip-filter-component.js';

export default class FilterPresenter {
    constructor(container, tripModel, listPresenter) {
        this._container = container;
        this._tripModel = tripModel;
        this._listPresenter = listPresenter;
        this._component = null;
    }

    init() {
        this._component = new TripFilterComponent();
        render(this._component, this._container, RenderPosition.BEFOREEND);
        this._component.setFilterChangeHandler(genre => this._listPresenter.setFilter(genre));
    }
}
