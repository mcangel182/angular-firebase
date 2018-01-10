import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { FirebaseService } from './firebase/firebase.service';
import { FormsModule } from '@angular/forms';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDEVUr8Mzh5ak-LZhLtXnFbdUkb_cF4044",
  authDomain: "angular-firebase-5e624.firebaseapp.com",
  databaseURL: "https://angular-firebase-5e624.firebaseio.com",
  projectId: "angular-firebase-5e624",
  storageBucket: "angular-firebase-5e624.appspot.com",
  messagingSenderId: "43447701084"
};

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }