import {Component} from '@angular/core';
import {OutputService} from '../output.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
    public selections = [];

    constructor(private output: OutputService) {
        this.output.getSelections().subscribe(selections => {
            this.selections = selections;
        });
    }
}
