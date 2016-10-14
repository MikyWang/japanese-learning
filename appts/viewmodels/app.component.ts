import { Component, Input } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { Kana } from '../models/kana'
@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.html',
  styleUrls: ['../../styles/app.css']
})
export class AppComponent {
  kana: Kana = new Kana('a', 's', 's');
}
