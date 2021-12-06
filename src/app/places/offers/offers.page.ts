import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: Place[] = [];

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

  onEdit(id: string, item: IonItemSliding) {
    item.close();
    this.router.navigate(['edit-offer', id], { relativeTo: this.route });
  }
}
