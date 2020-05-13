import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'restaurant';
import { RestaurantService } from 'restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant 

  constructor(
    private restaurantService: RestaurantService, 
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    let index = Number(this.route.snapshot.paramMap.get("id"))
    this.restaurant = this.restaurantService.getRestaurantByIndex(index)
  }


}
