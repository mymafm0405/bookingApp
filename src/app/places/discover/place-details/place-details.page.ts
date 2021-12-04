import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  currentPlace: Place;
  placeId: string;

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.placeId = params.placeId;
    });
    this.currentPlace = this.placesService.getCurrentPlace(this.placeId);
  }

  onEdit() {
    this.router.navigate(['places/offers/edit-offer', this.placeId]);
  }
}
