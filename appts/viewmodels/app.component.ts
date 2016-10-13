import { Component, Input } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { Kana } from '../models/kana'
@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.html',
})
export class AppComponent {
  kana: Kana = new Kana('s', 's', 's');
  detail: string = "http://www.baidu.com";
}
