import { Component, Input } from '@angular/core';
import { Kana } from '../models/kana'
@Component({
  selector: 'my-app',
  templateUrl: '/views/app.html',
  styleUrls: ['../../styles/app.css']
})
export class AppComponent {
  kana: Kana = new Kana(1, 'a', 'sa', 's', "a");
}
