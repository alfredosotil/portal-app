import { Component, ViewChild, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PropertyService } from '../../services/property.service';
import { UtilsService } from 'app/utils.service';
import { GlobalService } from 'app/global.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    input = new EventEmitter();
    properties = [];
    model = {};
    isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor(
        private ps: PropertyService,
        private us: UtilsService,
        private gs: GlobalService
    ) { }

    ngOnInit() {
        this.listProperties();
    }

    private showInfoWindow(t) {
        var e = t.target;
        e.ng2MapComponent.openInfoWindow("iw", e, {
            lat: e.getPosition().lat(),
            lng: e.getPosition().lng()
        })
    }

    private listProperties() {
        this.isLoading$.next(true);
        this.ps.list()
            .subscribe(
            data => this.properties = data,
            error => alert(error),
            () => this.isLoading$.next(false)
            );
    }
}
