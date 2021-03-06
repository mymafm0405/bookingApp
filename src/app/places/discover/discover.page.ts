import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
  }

  onFiltered(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail.value);
  }
}
