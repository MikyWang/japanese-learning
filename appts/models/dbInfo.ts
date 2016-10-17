import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
export class DBInfo {
    private _host: string;
    private _port: number;
    private _userName: string;
    private _password: string;

    constructor(private http: Http) {
        this.http.get('/myconfig.json').forEach(res => {
            let value = res.json() as DBInfo;
            this._host = value.host;
            this._port = value.port;
            this._userName = value.userName;
            this._password = value.password;
        });
    }
    public get host(): string {
        return this._host;
    }

    public get port(): number {
        return this._port;
    }

    public get userName(): string {
        return this._userName;
    }

    public get password(): string {
        return this._password;
    }

}