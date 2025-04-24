import AbstractComponent from '../framework/view/abstract-component.js';

export default class TripItemComponent extends AbstractComponent {
    constructor(trip) {
        super();
        this._trip = trip;
    }

    get template() {
        return `
      <li class="trip-item" data-id="${this._trip.id}">
        <div class="trip-details">
          <span>${this._trip.destination}</span>
          <span>${this._trip.date}</span>
          <span>${this._trip.note}</span>
        </div>
        <div>
          <button class="trip-item__delete">Удалить</button>
          <button class="trip-item__edit">Редактировать</button>
        </div>
      </li>`;
    }

    setDeleteHandler(handler) {
        this.element.querySelector('.trip-item__delete').addEventListener('click', handler);
    }

    setEditHandler(handler) {
        this.element.querySelector('.trip-item__edit').addEventListener('click', handler);
    }
}
