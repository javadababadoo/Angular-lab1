import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { environment } from '../environments/environment';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModuleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ChatService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
