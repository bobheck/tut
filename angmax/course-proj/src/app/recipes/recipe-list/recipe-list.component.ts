import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  

  recipes: Recipe[] = [
    new Recipe('Recipe 1'
                  ,'This is simply a test'
                  , 'https://cookieandkate.com/images/2012/03/vegan-curry-recipe.jpg',
                  [
                    new Ingredient('Beef', 2, 'lbs'),
                    new Ingredient('Water', 3, 'cups'),
                    new Ingredient('Salt', .25, 'tsp'),
                    new Ingredient('Noodles', 1, 'lbs'),
                  ]),
    new Recipe('Recipe 2','This is simply a test', 'https://cookieandkate.com/images/2012/03/vegan-curry-recipe.jpg',
    [
      new Ingredient('Carrots', 2, 'lbs'),
      new Ingredient('Salmon', 13, 'oz'),
      new Ingredient('Salt', .25, 'tsp'),
    ]),
    new Recipe('Recipe 3','This is simply a test', 'https://cookieandkate.com/images/2012/03/vegan-curry-recipe.jpg',
    [
      new Ingredient('Chicken', 2, 'lbs'),
      new Ingredient('Water', 3, 'cups'),
      new Ingredient('Salt', .25, 'tsp'),
      new Ingredient('Noodles', 1, 'lbs'),
    ])
  ];
  constructor() { }


  ngOnInit(): void {
  }
 
  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }
}
