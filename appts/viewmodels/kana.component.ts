import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Kana } from '../models/kana';

@Component({
  selector: 'kana',
  templateUrl: '../../views/kana.html'
})
export class KanaComponent {
  @Input()
  kana: Kana;
  @Input()
  detail: string;
}