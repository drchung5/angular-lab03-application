import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'restaurant';
import { RestaurantService } from 'restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[]

  constructor( private restaurantService: RestaurantService ) { 
    this.restaurants = restaurantService.getAllRestaurants()
  }

  ngOnInit(): void {
  }

}
