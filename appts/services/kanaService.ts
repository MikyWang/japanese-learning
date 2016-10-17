import { Headers, Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { DBInfo } from './../models/dbInfo';

@Injectable()
export class KanaSevice {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url: string = `${this.dbInfo.host}:${this.dbInfo.port}`;
    public dbInfo: DBInfo = new DBInfo(this.http);
    constructor(private http: Http) {
    }


}