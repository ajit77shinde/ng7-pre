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


  uploadImage(imgData) {
    const fd = new FormData();
    fd.append('image',imgData,imgData.name  )
    console.log(imgData);
    this.http.post(`${this.uri}/recipes/image_upload`,fd)
    .subscribe(res => console.log('Done'));
  }

  addRecipeData(newRecipe,imageData) {
    const fd = new FormData();
    fd.append('newRecipe',newRecipe);
    fd.append('imageData',imageData);
    console.log('adding recipe data ');
    console.log(newRecipe);
    this.http.post(`${this.uri}/recipes`,fd)
      .subscribe(res => console.log('Done'));
  }
  getRecipeData() {
    console.log('in get recipe data called');
    return this.http.get<Recipe[]>(`${this.uri}/recipes`);
  }
}