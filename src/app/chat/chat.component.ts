import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  username: String;

  message: String;

  messageList$;

  constructor(private db: AngularFirestore) {
    console.log('Test');
    this.messageList$ = db.collection('chatroom-general').valueChanges();
  }

  ngOnInit() {
  }


  sendMessage() {
    // console.log('Message -> ',  this.message);
    this.db.collection('chatroom-general').add({message: this.message, userName: 'UserTest'});
  }

}
