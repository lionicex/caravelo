import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  public tickets: [{
    journeyKey: string,
    amount: number,
    currency: string,
    mealId: string
  }];

  constructor(private http: HttpClient) {
    this.http.get('../assets/output.json').toPromise().then((data: any) => {
      this.tickets = data.selection;
    });
  }
}
