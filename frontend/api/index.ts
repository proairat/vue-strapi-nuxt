/*
│ HEAD|GET           │ /api/cars                                                                   │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ HEAD|GET           │ /api/cars/:id                                                               │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ POST               │ /api/cars                                                                   │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ PUT                │ /api/cars/:id                                                               │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ DELETE             │ /api/cars/:id                                                               │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ HEAD|GET           │ /api/categories                                                             │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ HEAD|GET           │ /api/categories/:id                                                         │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ POST               │ /api/categories                                                             │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ PUT                │ /api/categories/:id                                                         │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ DELETE             │ /api/categories/:id                                                         │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ POST               │ /api/categories/:id/localizations 
*/

const BASE_URL = "http://localhost:1337/api";
const BASE_URL_GET_CARS = `${BASE_URL}/products`;
const BASE_URL_GET_CATEGORIES = `${BASE_URL}/categories`;

export { BASE_URL, BASE_URL_GET_CARS, BASE_URL_GET_CATEGORIES };
