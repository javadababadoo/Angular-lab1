import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { LoginService } from './login.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ChatService {

  constructor(private db: AngularFirestore, private loginService: LoginService) {

  }

  getUsername() {
    return this.loginService.userName;
  }

  getMessages$() {
    return this.db.collection('chatroom-general', ref => ref.orderBy('createdAt')).valueChanges();
  }

  sendMessage(chatRoom = 'chatroom-general', message: String) {
    if (this.loginService.userName) {
      this.db
      .collection(chatRoom)
      .add({ message, userName: this.loginService.userName, createdAt: this.timestamp });
    }
  }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }


}
