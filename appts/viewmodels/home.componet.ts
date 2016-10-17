import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector: 'home',
    templateUrl: '/views/home.html'
})
export class HomeComponent {
    constructor(private router: Router) { }
}