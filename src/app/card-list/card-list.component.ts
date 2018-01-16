import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card'; 

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {

  public cards: Observable<Card[]>;

  constructor(private firebaseService: FirebaseService) {
    
  }

  ngOnInit() {
    this.cards = this.firebaseService.getCardsList().snapshotChanges()
    .map(actions => {
        return actions.map(action => {
            const $key = action.payload.key;
            const data = { $key, ...action.payload.val() };
            return data;
        });
    });
    this.cards.subscribe(data => console.log(data) );
  }

  public addCard(card) {
    this.firebaseService.addCard(card);
    console.log("");
  }
}
