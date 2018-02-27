import { Component, OnInit } from '@angular/core';
import { Corgi } from './corgi';

@Component({
    selector: 'corgi',
    templateUrl: './corgi.component.html',
    providers: []
})
export class CorgiComponent implements OnInit {
    corgi: Corgi;

    ngOnInit() {
        this.corgi = new Corgi();
    }
}