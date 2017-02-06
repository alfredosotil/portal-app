import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private gs: GlobalService,
    ) {}

    ngOnInit(): any { }
}
