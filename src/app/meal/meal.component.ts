import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {
  public currentcy = 'EUR';
  public meals: [{
    mealId: string,
    desc: string,
    priceRange: {
      max: number,
      min: number,
      jump: number,
    },
    price: number,
    routeImage: string,
  }];

  public plus(meal) {
    const index = this.meals.indexOf(meal);
    if (this.meals[index].price < this.meals[index].priceRange.max) {
      this.meals[index].price += this.meals[index].priceRange.jump;
    }
  }

  public minus(meal) {
    const index = this.meals.indexOf(meal);
    if (this.meals[index].price > this.meals[index].priceRange.min) {
      this.meals[index].price -= this.meals[index].priceRange.jump;
    }
  }

  constructor(private http: HttpClient) {
    this.http.get('../assets/input.json').toPromise().then((data: any) => {
      this.meals = data.options;
      for (let i = 0; i < this.meals.length; i++) {
        this.meals[i].price = 0;
        this.meals[i].routeImage = '../assets/img/ml0' + i + '.jpg';
      }
    });
  }
}
