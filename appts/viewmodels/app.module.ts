import { HomeComponent } from './home.componet';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { KanaComponent } from './kana.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { KanaSevice } from './../services/kanaService';

@NgModule({
  imports:
  [
    BrowserModule,
    Ng2BootstrapModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations:
  [
    AppComponent,
    KanaComponent,
    HomeComponent
  ],
  providers: [KanaSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
