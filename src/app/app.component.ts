import { Component, HostListener } from '@angular/core';
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
    ) {

    }
    ngOnInit(): any { }

    @HostListener('window:scroll', ['$event'])
    showTop(event) {
        var s = jQuery(document).scrollTop();
	if (s >= 110) {
		jQuery('#toTop').show();
	} else {
		jQuery('#toTop').hide();	
	}
        console.debug("Scroll Event");
    }
}
