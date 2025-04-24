import AbstractComponent from '../framework/view/abstract-component.js';

export default class TripFormComponent extends AbstractComponent {
    get template() {
        return `
        <div class="trip-form">
            <h2>Добавить новую поездку</h2>
            <form id="trip-form">
                <label for="trip-destination">Путешествие:</label>
                <input type="text" id="trip-destination" placeholder="Destination" required />
                <label for="trip-date">Дата:</label>
                <input type="date" id="trip-date" required />
                <label for="trip-notes">Заметки:</label>
                <textarea id="trip-notes" placeholder="Notes" rows="3"></textarea>
                <button type="submit">Добавить поездку</button>
            </form>
        </div>`;
    }

    setSubmitHandler(handler) {
        this.element.querySelector('#trip-form').addEventListener('submit', handler);
    }

    getData() {
        const destination = this.element.querySelector('#trip-destination').value;
        const date = this.element.querySelector('#trip-date').value;
        const note = this.element.querySelector('#trip-notes').value;
        this.element.querySelector('#trip-form').reset();
        return {destination: destination, date: new Date(date),note: note };
    }
}
