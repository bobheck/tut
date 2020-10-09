import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe 1','This is simply a test', 'https://cookieandkate.com/images/2012/03/vegan-curry-recipe.jpg'),
    new Recipe('Recipe 2','This is simply a test', 'https://cookieandkate.com/images/2012/03/vegan-curry-recipe.jpg'),
    new Recipe('Recipe 3','This is simply a test', 'https://cookieandkate.com/images/2012/03/vegan-curry-recipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
