import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() recipe: String;
  constructor() { }
imgurl2 :String ='http://res.cloudinary.com/dqhg5acpy/image/upload/';
  ngOnInit() {
    // console.log("in app-card",this.recipe);
  }

}
