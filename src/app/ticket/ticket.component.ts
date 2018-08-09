import {Component} from '@angular/core';
import {OutputService} from '../output.service';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
    public tickets = [];
    constructor(private output: OutputService) {
        this.output.getSelections().subscribe(selections => {
            this.tickets = selections;
        });
    }
}
