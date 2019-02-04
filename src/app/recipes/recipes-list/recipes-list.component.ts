import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('A new reipe', 'This recipe is very testy', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
