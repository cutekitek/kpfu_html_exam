import { generateID } from '../utils.js';

export const initialTrips = [
  {id: generateID(), destination: "Москва", date: new Date("2025-04-11"), note:""},
  {id: generateID(), destination: "Питер", date: new Date("2025-04-13"), note:""},
  {id: generateID(), destination: "Казань", date: new Date("2025-04-18"), note:""},
  {id: generateID(), destination: "Москва", date: new Date("2025-04-21"), note:""}
];
