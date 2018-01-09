import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Card } from '../models/card'; 
import { FirebaseService } from '../firebase/firebase.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor(private firebaseService: FirebaseService) {  }

  ngOnInit() {
  }

  public reload() {
    this.firebaseService.updateCard(this.card.$key, { status: "Reloading" });
    setTimeout(() => this.firebaseService.updateCard(this.card.$key, { status: "Created" }),5000)
  }

  public delete() {
    this.firebaseService.deleteCard(this.card.$key);
  }

}
