import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService} from '../../services/recipe.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})

export class RecipesListComponent implements OnInit {
name = new FormControl('');



  recipes: Recipe[] = [
    new Recipe('A new recipe', 'This recipe is very testy', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EczqWFIrpLPnUu3V4Tx0l_UeXmqfdzS2Jdy6HFpuEDQxH80n'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_-phVm4SZmASmRcmf6KJ2SLDCkXCZVI_Ot2s-3VKBd09bRi8'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://c1.staticflickr.com/6/5496/31479301445_cb53c0f4e9_b.jpg'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://c1.staticflickr.com/5/4168/34641495421_038cd633ec_b.jpg'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://upload.wikimedia.org/wikipedia/commons/f/f1/BLT_sandwich_%281%29.jpg'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://upload.wikimedia.org/wikipedia/commons/f/f1/BLT_sandwich_%281%29.jpg'),
    new Recipe('A new recipe', 'This recipe is very testy', 'https://c1.staticflickr.com/6/5496/31479301445_cb53c0f4e9_b.jpg')

  ];
  constructor(private rs: RecipeService) { }

  addRecipe(){
    console.log('in recipe lilst componet');
    
    const recipe_name: String = 'new recipe';
    const recipe_description: String = 'thi is going to save in database'; 
    this.rs.addRecipeData(recipe_name,recipe_description);

  }
  ngOnInit() {
  }

}
