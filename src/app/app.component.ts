import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private db: AngularFirestore) {
  }



  sendMessage(message: String) {
    this.db.collection('chatroom-general').add({message, userName: 'UserTest'});
  }
}
