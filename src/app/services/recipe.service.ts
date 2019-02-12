import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipes.model';
@Injectable({
  providedIn: 'root'

})
export class RecipeService {
  recipeobservable: Observable<Recipe[]>;

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  addRecipeData(newRecipe) {
    console.log('adding recipe data ', `${this.uri}/recipes`);
    this.http.post(`${this.uri}/recipes`, newRecipe)
      .subscribe(res => console.log('Done'));
  }

  getRecipeData() {
    console.log('in get recipe data called');
    return this.http.get<Recipe[]>(`${this.uri}/recipes`);
  }
}