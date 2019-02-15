import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { FileItem } from 'ng2-file-upload';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  formData: FormData = new FormData();
  imageData: FileItem;
  recipeForm: FormGroup
  submited: true
  constructor(private formBuilder: FormBuilder, private rs: RecipeService) { }
  imageOutPut($event){
  this.imageData = $event;
  console.log("imageData");
  console.log(this.imageData)
}

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

    const recipeFormObj = this.recipeForm.controls

    console.log("data is send from33333333333")
    const newRecipe = {
      title: recipeFormObj.title.value,
      description: recipeFormObj.description.value,
      ingredients: recipeFormObj.ingredients.value,
      detail: recipeFormObj.detail.value
      // fileData: this.exampleParent
    }
    // this.formData.append('newRecipe', newRecipe);
    console.log("data is send from44444444444")
    let dataToBeSend = {formdata: newRecipe, imageDta: this.imageData }
    console.log('object to be pass to service',dataToBeSend); 
    this.rs.addRecipeData(newRecipe, this.imageData);
  }
}
