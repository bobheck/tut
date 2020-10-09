import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5, 'ea'),
    new Ingredient('Sugar', 2, 'tbs'),
    new Ingredient('Cinnamon', 2, 'tbs'),
    new Ingredient('Butter', 1, 'tbs')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
