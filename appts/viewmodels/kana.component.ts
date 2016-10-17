import { Component, HostListener, Input } from '@angular/core';
import { Kana } from '../models/kana';

@Component({
  selector: 'kana',
  templateUrl: '/views/kana.html',
  styleUrls: ['/styles/kana.css']
})
export class KanaComponent {
  constructor() { }
  normalWidth: string = '76px';
  width: string;
  @Input()
  kana: Kana;
  @HostListener('click')
  test() {
    this.width = (this.width === this.normalWidth) ? '200px' : this.normalWidth;
  }
}