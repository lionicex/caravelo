import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class OutputService {
    private keys = [];
    private selections = {};
    private selectionsObservable = new BehaviorSubject(null);
    constructor() {
    }
    public addSelection(journeyKey: string, amount: number, currency: string, mealId: string) {
        const key: string = journeyKey + mealId;
        if (amount === 0) {
            this.keys.splice(this.keys.indexOf(key), 1);
            delete this.selections[key];
        } else {
            if (this.keys.indexOf(key) < 0) {
                this.keys.push(key);
            }
            this.selections[key] = {
                journeyKey: journeyKey,
                amount: amount,
                currency: currency,
                mealId: mealId
            };
        }
        this.selectionsObservable.next(this.parseSelectionsToArray());
    }
    private parseSelectionsToArray() {
        const selections = [];
        if (this.keys !== undefined && this.keys !== null && this.keys !== []) {
            for (let i = 0; i < this.keys.length; i++) {
                selections.push(this.selections[this.keys[i]]);
            }
        }
        return selections.length !== 0 ? selections : null;
    }
    public getSelections() {
        return this.selectionsObservable.asObservable();
    }
}
