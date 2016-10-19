import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { KanaSevice } from './../services/kanaService';
import { Kana } from './../models/kana';
@Component({
    selector: 'home',
    templateUrl: '/views/home.html'
})
export class HomeComponent {
    constructor(private router: Router, private kanaService: KanaSevice) { }

}