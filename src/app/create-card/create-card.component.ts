import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  public card = {title: '', description: '', image: '', status: "Created"};
  constructor(private firebaseService: FirebaseService) {  }

  ngOnInit() {
  }

  public triggerSave() {
    this.firebaseService.addCard(this.card);
    this.card = {title: '', description: '', image: '', status: "Created"};
  }

}
