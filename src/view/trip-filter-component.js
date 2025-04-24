import AbstractComponent from '../framework/view/abstract-component.js';

export default class TripFilterComponent extends AbstractComponent {
    constructor() {
        super();
    }

    get template() {
        return `
      <div class="trip-filter">
        <h2>Фильтровать</h2>
        <label for="trip-filter-from">От:</label>
        <input type="date" id="trip-filter-from" required />
        <label for="trip-filter-from">До:</label>
        <input type="date" id="trip-filter-to" required />
      </div>`;
    }

    setFilterChangeHandler(handler) {
        let filterFrom = this.element.querySelector('#trip-filter-from')
        let filterTo = this.element.querySelector("#trip-filter-to")
        let callback = (evt) => {
          handler({from: filterFrom.value ? new Date(filterFrom.value) : null, 
                   to: filterTo.value ? new Date(filterTo.value) : null})
        }
        filterFrom.addEventListener('change', callback);
        filterTo.addEventListener('change', callback)
    }
}
