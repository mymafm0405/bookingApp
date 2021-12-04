/* eslint-disable max-len */
import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  places: Place[] = [
    new Place(
      'p1',
      'New York',
      'Very crowded city but nice',
      'https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg',
      149.99
    ),
    new Place(
      'p2',
      'Qatar',
      'Enjoy the hot weather',
      'https://essenceofqatar.com/wp-content/uploads/2021/08/skyline-west-bay-doha-city-center-sunrise-qatar-skyline-west-bay-doha-city-center-sunrise-qatar-114113671.jpg',
      215.99
    ),
    new Place(
      'p3',
      'Alexandria',
      'Beaches, swimming and more',
      'https://ahlan.b-cdn.net/wp-content/uploads/bridge-alexandria-1.jpg',
      180.99
    ),
  ];

  constructor() {}

  getPlaces() {
    return this.places.slice();
  }

  getCurrentPlace(id: string) {
    return this.places.find(pl => pl.id === id);
  }
}
