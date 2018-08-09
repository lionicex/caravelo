import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FlightsComponent} from './flights/flights.component';
import {MealComponent} from './meal/meal.component';
import {TicketComponent} from './ticket/ticket.component';
import {FooterComponent} from './footer/footer.component';
import {SubmitComponent} from './submit/submit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FlightsComponent,
        MealComponent,
        TicketComponent,
        FooterComponent,
        SubmitComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
