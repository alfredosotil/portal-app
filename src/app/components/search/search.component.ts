import { Component, ViewChild, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PropertyService } from '../../services/property.service';
import { UtilsService } from 'app/utils.service';

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
        private us: UtilsService
    ) { }

    ngOnInit() {
        this.initSearchLink();
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

    private initSearchLink() {
        jQuery('.search_link').click(function(e) {
            "use strict";
            jQuery('.search_form_area').addClass('shown').removeClass('hidden');
            jQuery('.search_field').focus();
            e.preventDefault();
            return false;
        });
        jQuery('.search_close').click(function(e) {
            "use strict";
            jQuery('.search_form_area').removeClass('shown').addClass('hidden');
            jQuery('.search_field').val("");
            e.preventDefault();
            return false;
        });
    }

}
