import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
    
  })
  export class RecipeService {

    uri = 'http://localhost:3000';
      constructor(private http: HttpClient) {}

    addRecipeData(recipe_name,recipe_description){
        console.log("Recipe data to be store in database");
        console.log(recipe_name);
        console.log(recipe_description);
        const obj = {
            title: recipe_name,
            description: recipe_description
        };
        console.log('adding recipe data ', `${this.uri}/recipes`);

        this.http.post(`${this.uri}/recipes`, obj)
        .subscribe(res => console.log('Done'));
    }

       getRecipeData(){
        //    console.log('http://localhost:3000/recipes');
       }
  }