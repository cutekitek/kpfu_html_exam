import { render, RenderPosition } from '../framework/render.js';
import TripFormComponent from '../view/trip-form-component.js';

export default class TripFormPresenter {
    constructor(container, tripModel) {
        this._container = container;
        this._tripModel = tripModel;
        this._component = new TripFormComponent();
    }

    init() {
        render(this._component, this._container, RenderPosition.BEFOREEND);
        this._component.setSubmitHandler(evt => {
            evt.preventDefault();
            this._tripModel.addTrip(this._component.getData());
        });
    }
}
