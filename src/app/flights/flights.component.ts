import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent {
  public passengers: [{
    firstName: string,
    lastName: string,
    prefix: string
  }];
  public flights: [{
    key: string,
    flight: string,
    departure: string,
    departureDate: string,
    arrival: string,
    arrivalDate: string,
    expanded: string,
    index: string
  }];

  constructor(private http: HttpClient) {
    this.http.get('../assets/input.json').toPromise().then((data: any) => {
      this.flights = data.booking.journeys;
      for (let i = 0; i < this.flights.length; i++) {
        if (i === 0) {
          this.flights[i].expanded = 'true';
        } else {
          this.flights[i].expanded = 'false';
        }
      }
      this.passengers = data.booking.passengers;
    });
  }
}
