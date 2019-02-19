import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileItem } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/recipes/image_upload';
@Component({
  selector: 'app-recipes-img',
  templateUrl: './recipes-img.component.html',
  styleUrls: ['./recipes-img.component.scss']
})
export class RecipesImgComponent implements OnInit {
  @Output() imageOutPut = new EventEmitter<FileItem>();

  exampleMethodChild() {
    this.imageOutPut.emit(this.imageData)
  }
  constructor(private rs: RecipeService, private http: HttpClient) { }
  uri = 'http://localhost:3000';
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'name_of_input-key' });
  title = 'Select Image';
  imageData: FileItem = null;

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => {
      this.imageData = file;
      this.exampleMethodChild();
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    }
  }
}
