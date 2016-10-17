import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { KanaSevice } from './../services/kanaService';
@Component({
    selector: 'home',
    templateUrl: '/views/home.html'
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, private kanaService: KanaSevice) { }
    ngOnInit() {
        console.log(this.kanaService.dbInfo);
    }
}