import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  userName: String;

  constructor() { }

  loginUser(userName: String) {
    this.userName = userName;
  }

}
