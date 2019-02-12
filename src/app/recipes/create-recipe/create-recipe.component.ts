import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  recipeForm: FormGroup
  submited: true
  constructor(private formBuilder: FormBuilder, private rs: RecipeService) { }


  ngOnInit() {

    this.recipeForm = this.formBuilder.group({
      title:['', Validators.required ],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      detail: ['', Validators.required],
    });
  }
  get f(){
    return this.recipeForm.controls
  }
  onSubmit() {
    this.submited = true
    console.warn(this.recipeForm);
    
    //Stop here if validation is invalid
    if(this.recipeForm.invalid){
      return;
    }
    const recipeFormObj = this.recipeForm.controls
    const newRecipe = {
      title: recipeFormObj.title.value,
      description: recipeFormObj.description.value,
      ingredients: recipeFormObj.ingredients.value,
      detail: recipeFormObj.detail.value
    }
    console.log('object to be pass to service',newRecipe); 
    this.rs.addRecipeData(newRecipe);
    
  }
}
