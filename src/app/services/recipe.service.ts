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

  uploadImage(newRecipe,imgData) {
    let fd = new FormData();
      // for(let fileData in newRecipe){
      //   fd.append()
      // }
    fd.append('image',imgData,imgData.name);
    fd.append('title',newRecipe.title);
    fd.append('description',newRecipe.description);
    fd.append('ingredients',newRecipe.ingredients);
    fd.append('detail',newRecipe.detail);
    this.http.post(`${this.uri}/recipes/image_upload`,fd)
    .subscribe(res => res);
  }

  addRecipeData(newRecipe,imageData) {
    let fd1 = new FormData();
    // fd1.append('newRecipe',newRecipe);
    fd1.append('image',imageData);
    this.http.post(`${this.uri}/recipes`,fd1)
      .subscribe(res => console.log('Done'));
  }
  getRecipeData() {
    return this.http.get<Recipe[]>(`${this.uri}/recipes`);
  }
}