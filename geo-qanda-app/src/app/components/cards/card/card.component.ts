import { QOrA } from './../../../models/q-or-a';
import { Component, OnInit, Input, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isQuestion: boolean;
  public isCompact: boolean = false;
  public qOrA: QOrA;

  constructor(private _ngZone: NgZone) {
    this.qOrA = new QOrA();
  }

  ngOnInit() {
    if (this.isQuestion) {

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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    var threshold = 50;
    if (window.scrollY >= 50 && this.isCompact === false) {
      this.isCompact = true;
    } else if (window.scrollY < 50 && this.isCompact === true) {
      this.isCompact = false;
    }
  }

}
