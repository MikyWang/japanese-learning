import { Component, HostListener, Input } from '@angular/core';
import { Kana } from '../models/kana';

@Component({
  selector: 'kana',
  templateUrl: '/views/kana.html',
  styleUrls: ['../../styles/kana.css']
})
export class KanaComponent {
  constructor() { }
  @Input()
  kana: Kana;
}