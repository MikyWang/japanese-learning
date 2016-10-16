import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { KanaComponent } from './kana.component';
import { PanelModule } from './panel';
@NgModule({
  imports:
  [
    BrowserModule,
    Ng2BootstrapModule,
    PanelModule
  ],
  declarations:
  [
    AppComponent,
    KanaComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
