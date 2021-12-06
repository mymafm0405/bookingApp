import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  bookings: Booking[] = [new Booking('b1', 'p1', 'u1', 'Some place title', 2)];

  getBookings() {
    return this.bookings.slice();
  }
}
