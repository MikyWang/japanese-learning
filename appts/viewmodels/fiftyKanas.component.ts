import { Component, OnInit } from '@angular/core';
import { Kana } from './../models/kana';
import { Router } from '@angular/router';
import { KanaSevice } from './../services/kanaService';
@Component({
    selector: 'kanas',
    templateUrl: '/views/kanalist.html',
    styleUrls: ['../../styles/kanalist.css']
})
export class KanasComponent implements OnInit {
    public kanas: Kana[][] = [];
    constructor(private router: Router, private kanaService: KanaSevice) { }
    ngOnInit() {
        this.kanaService.getKanas(res => {
            let kanas = res.json() as Kana[];
            this.kanas.push(
                kanas.filter(kana => kana.type == 'a'),
                kanas.filter(kana => kana.type == 'ka'),
                kanas.filter(kana => kana.type == 'sa'),
                kanas.filter(kana => kana.type == 'ta'),
                kanas.filter(kana => kana.type == 'na'),
                kanas.filter(kana => kana.type == 'ha'),
                kanas.filter(kana => kana.type == 'ma'),
                kanas.filter(kana => kana.type == 'ya'),
                kanas.filter(kana => kana.type == 'ra'),
                kanas.filter(kana => kana.type == 'wa'),
            );
        });
    }

}