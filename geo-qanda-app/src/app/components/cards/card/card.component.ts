import { QOrA } from './../../../models/q-or-a';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isQuestion: boolean;

  public qOrA: QOrA;

  constructor() {
    this.qOrA = new QOrA();
   }

  ngOnInit() {
    if(this.isQuestion) {

      this.qOrA.id = 1;
      this.qOrA.location = "Winners";
      this.qOrA.mainText = "What's your go-to song when you are singing in the shower?";
      this.qOrA.ownerAvatarUrl = "http://www.hexatar.com/gallery/thumb/170921_100228_facc62e8c4e_avatar.png";
      this.qOrA.ownerName = "Judie Liliana";
    }
    else {
      this.qOrA.id = 2;
      this.qOrA.location = "Winners";
      this.qOrA.mainText = "Here is my Answer";
      this.qOrA.ownerAvatarUrl = "http://www.hexatar.com/gallery/thumb/170921_100228_facc62e8c4e_avatar.png";
      this.qOrA.ownerName = "Judie Liliana";
    }
  }

}
