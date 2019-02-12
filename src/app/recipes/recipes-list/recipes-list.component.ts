import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../../services/recipe.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})

export class RecipesListComponent implements OnInit {
  name = new FormControl('');

  recipeobservable: Observable<Recipe[]>;

  recipes: Recipe[] = [];
  constructor(private rs: RecipeService) { }

  // addRecipe() {
  //   console.log('in recipe lilst componet');
  //   const recipe_name: String = 'Kaju Kothimbir Vadi';
  //   const recipe_description: String = 'A classic Maharashtrian snack made of gram flour, spices and an addition of cashew nuts';
  //   // this.rs.addRecipeData(recipe_name, recipe_description);
  // }
  ngOnInit() {
    console.log('In recipe list component-ng on init() function')
    this.rs.getRecipeData().subscribe((data) => this.recipes = data);
  }
}
