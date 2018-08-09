import {Component} from '@angular/core';
import {OutputService} from '../output.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
    public selections = [];
    public jsonURL;
    private jsonString: string;
    constructor(private output: OutputService, private sanitizer: DomSanitizer) {
        this.output.getSelections().subscribe(selections => {
            this.selections = selections;
            this.jsonString = JSON.stringify(this.selections, null, 4);
            this.jsonURL = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' +
                encodeURIComponent(this.jsonString));
        });
    }
    outputJson() {
        console.log(this.jsonString);
    }
}
