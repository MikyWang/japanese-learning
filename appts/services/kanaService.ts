import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KanaSevice {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private testUrl = ''
}