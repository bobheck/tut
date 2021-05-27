import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedFeature = 'recipe';

  onNavigate(feature: string) {
    this.selectedFeature = feature;
  }

}
