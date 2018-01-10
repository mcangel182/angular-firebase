import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Card } from '../models/card'; 

@Injectable()
export class FirebaseService {

  public cards: AngularFireList<Card>;
  private dbPath: string = '/cards';

  constructor(private db: AngularFireDatabase) {  }

  getCardsList() {
    this.cards = this.db.list(this.dbPath);
    return this.cards;
  }
  addCard(card) {
    this.cards.push(card);
  }

  updateCard(key: string, value: any): void {
    this.cards.update(key, value)
      .catch(error => this.handleError(error))
  }

  deleteCard(key: string): void {
    this.cards.remove(key)
      .catch(error => this.handleError(error))
  }
  private handleError(error) {
    console.log(error)
  }
}
