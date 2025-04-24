import AbstractComponent from '../framework/view/abstract-component.js';

export default class TripEditComponent extends AbstractComponent {
    constructor(trip) {
        super();
        this._trip = trip;
    }

    get template() {
        return `
      <li class="trip-item-edit" data-id="${this._trip.id}">
        <div class="trip-details-edit">
          <input type="text" class="trip-edit__destination" value="${this._trip.destination}" required />
          <input type="date" class="trip-edit__date" value="${this._trip.date.toISOString().split('T')[0]}" required />
          <textarea class="trip-edit__note" placeholder="Notes" rows="3">${this._trip.note}</textarea>
        </div>
        <div>
          <button class="trip-edit__save">Сохранить</button>
          <button class="trip-edit__cancel">Отмена</button>
        </div>
      </li>`;
    }

    getData() {
        const destination = this.element.querySelector('.trip-edit__destination').value;
        const date = this.element.querySelector('.trip-edit__date').value;
        const note = this.element.querySelector('.trip-edit__note').value;
        return { destination: destination, date: new Date(date), note: note };
    }

    setSaveHandler(handler) {
        this.element.querySelector('.trip-edit__save').addEventListener('click', handler);
    }

    setCancelHandler(handler) {
        this.element.querySelector('.trip-edit__cancel').addEventListener('click', handler);
    }
}
