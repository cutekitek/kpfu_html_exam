import { generateID } from '../utils.js';

export const initialTrips = [
  {id: generateID(), destination: "Москва", date: new Date("2025-04-11T10:00:00Z"), note:""},
  {id: generateID(), destination: "Питер", date: new Date("2025-04-13T10:00:00Z"), note:""},
  {id: generateID(), destination: "Казань", date: new Date("2025-04-18T10:00:00Z"), note:""},
  {id: generateID(), destination: "Москва", date: new Date("2025-04-21T10:00:00Z"), note:""}
];
