import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { TestComponent } from 'src/app/bookings/test-comp/test.component';

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
    private router: Router,
    private modalCtr: ModalController,
    private activeSheetCtrl: ActionSheetController
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

  onBook() {
    this.activeSheetCtrl
      .create({
        header: 'What you want to do?',
        buttons: [
          {
            text: 'Select Date',
            handler: () => {
              this.openModel('select');
            },
          },
          {
            text: 'Random date',
            handler: () => {
              this.openModel('random');
            },
          },
          {
            text: 'Cancel',
            role: 'distructive',
          },
        ],
      })
      .then((activeEl) => {
        activeEl.present();
      });
  }

  openModel(mode: 'select' | 'random') {
    console.log(mode);

    this.modalCtr
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.currentPlace },
      })
      .then((el) => {
        el.present();
        return el.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('Booked');
          this.modalCtr
            .create({
              component: TestComponent,
            })
            .then((modalEl) => {
              modalEl.present();
              return modalEl.onDidDismiss();
            })
            .then((resultData2) => {
              console.log(resultData2.role);
              console.log(resultData2.data);
              if (resultData.role === 'confirm') {
                console.log(resultData2.data);
              }
            });
        }
      });
  }
}
