import { Headers, Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class KanaSevice {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {
    }
    public getKanas(callback) {
        this.http.get('http://localhost:8000/kanas', [this.headers]).forEach(res => {
            callback(res);
        });
    }

}