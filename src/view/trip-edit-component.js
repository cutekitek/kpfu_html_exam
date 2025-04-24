import AbstractComponent from '../framework/view/abstract-component.js';

export default class TripEditComponent extends AbstractComponent {
    constructor(trip, genres) {
        super();
        this._trip = trip;
        this._genres = genres;
    }

    get template() {
        const options = this._genres
            .map(genre => {
                const selected = genre === this._trip.genre ? ' selected' : '';
                return '<option value="' + genre + '"' + selected + '>' + genre + '</option>';
            })
            .join('');
        return `
      <li class="trip-item-edit" data-id="${this._trip.id}">
        <div class="trip-details-edit">
          <input type="text" class="trip-edit__title" value="${this._trip.destination}" required />
          <input type="date" class="trip-edit__author" value="${this._trip.date}" required />
          <textarea id="trip-notes" placeholder="Notes" rows="3">${this._trip.note}</textarea>
          <select class="trip-edit__genre" required>
            ${options}
          </select>
        </div>
        <div>
          <button class="trip-edit__save">Сохранить</button>
          <button class="trip-edit__cancel">Отмена</button>
        </div>
      </li>`;
    }

    getData() {
        const title = this.element.querySelector('.trip-edit__title').value;
        const author = this.element.querySelector('.trip-edit__author').value;
        const genre = this.element.querySelector('.trip-edit__genre').value;
        return { title, author, genre };
    }

    setSaveHandler(handler) {
        this.element.querySelector('.trip-edit__save').addEventListener('click', handler);
    }

    setCancelHandler(handler) {
        this.element.querySelector('.trip-edit__cancel').addEventListener('click', handler);
    }
}
