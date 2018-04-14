import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ChatService {
  constructor(private db: AngularFirestore) {}

  sendMessage(message: String) {
    this.db
      .collection('chatroom-general')
      .add({ message, userName: 'UserTest' });
  }

}
