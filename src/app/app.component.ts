import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
declare var jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    heightSlider = 0;
    
    constructor(
        private gs: GlobalService,
    ) {}

    ngOnInit(): any { }
    
    openSearch(){
//        this.heightSlider = jQuery(".main_slider_fixed.homecomponent").height();
        jQuery(".main_slider_fixed.homecomponent").animate({ height: 0, opacity: 0 }, 'slow');
    }
    
    closeSearch(){
        this.gs.inputSearch = '';
        jQuery(".main_slider_fixed.homecomponent").animate({ height: 450, opacity: 1 }, 'slow');
//        jQuery(".main_slider_fixed.homecomponent").animate({ height: this.heightSlider, opacity: 1 }, 'slow');
    }
}
