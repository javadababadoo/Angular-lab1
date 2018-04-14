import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ChatService } from '../chat.service';
import { LoginService } from '../login.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  username: String = '';

  message: String;

  messageList$;

  constructor(private db: AngularFirestore, private chatService: ChatService,
    private loginService: LoginService, public snackBar: MatSnackBar) {
    // this.messageList$ = this.chatService.getMessages$();
    this.messageList$ = db.collection('chatroom-general', ref => ref.orderBy('createdAt')).valueChanges();
  }

  ngOnInit() {
  }

  loginUser() {
    if (this.loginService.userName == null || this.loginService.userName.toString().length === 0) {
      this.loginService.loginUser(this.username);
      console.log('User2: ' + this.username);
    }
    this.showMessage('User registered');
  }

  getUsername() {
    let val = this.chatService.getUsername();
    console.log('Username welcome -> ' + val);
    return val;
  }

  hideUsername() {
    return this.chatService.getUsername() == null;
  }

  getColor(messageData) {
    // console.log(JSON.stringify(messageData) + ' -- Username: ' + this.getUsername());
    if (messageData.userName === this.getUsername()) {
      return 'color-text';
    }
    return '';
  }


  getMessagesList$() {
    return this.messageList$;
  }

  sendMessage() {
    if (!this.loginService.userName) {
      this.showMessage('You must type your username');
    } else {
      if (!this.message) {
        this.showMessage('You must type your message');
      } else {
        this.chatService.sendMessage('chatroom-general', this.message);
      }
      this.message = '';
    }
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
