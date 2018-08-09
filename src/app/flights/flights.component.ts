import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OutputService} from '../output.service';

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
    }] = [{
        firstName: '',
        lastName: '',
        prefix: ''
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

    constructor(private http: HttpClient, private output: OutputService) {
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

    addSelection(journeyKey, event) {
        this.output.addSelection(journeyKey, event.amount, event.currency, event.mealId);
    }
}
