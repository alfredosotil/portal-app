import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { PropertyService } from '../../services/property.service';
//import * as jQuery from 'jquery';
declare var jQuery: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [PropertyService]
})
export class HomeComponent implements OnInit, AfterViewChecked {
    @ViewChild("myModalProperty") myModalProperty: ElementRef;
    properties = [];
    model = {};
//    modelsetter = false;

    constructor(private propertyService: PropertyService) {
        //        this.elementRef = elementRef;
    }

    ngOnInit() {
        this.listProperties();
        this.initSlider();
//        this.modelsetter = false;
    }

    ngAfterViewInit() {
        //        this.styleDivs();
        //        jQuery( document ).ready(function() {
        //        console.log("jQuery is ready");
        //      });
    }

    ngAfterViewChecked() {
        this.stylePuzzlecolor();
        this.styleCategoryIconBg();
        this.styleReview();
        jQuery('.ui.rating').rating('disable');        
    }
    
    setModel(model: any){
//        this.model = model;
//        this.modelsetter = true;
    }

    onEvent(event: Event) {
        //        event.preventDefault();
        //        event.stopPropagation();
        console.log(event);
    }
    
//    showModal(model: any){
//        this.setModel(model);
////        this.myModalProperty.show();
//    }

    selectColorTypeProperty(type) {
//        console.log(type);
            var color = "000000";
            switch (type) {
            case "Terreno":
                color = "bb8Ffce";
                break;
            case "Departamento":
                color = "3498db";
                break;
            case "Oficina":
                color = "48c9b0";
                break;
            case "Local":
                color = "f4d03f";
                break;            
        }
        return color;
    }

    private listProperties() {
        this.propertyService.list()
            .subscribe(
            data => this.properties = data,
            error => alert(error),
            () => console.log("# Finished list properties")
            );
    }
    
    private initSlider(){
        jQuery('.sc_slider_flex').each(function () {
		"use strict";
		if (jQuery(this).hasClass('inited')) return;
		jQuery(this).addClass('inited').flexslider({
			directionNav: true,
			prevText: '',
			nextText: '',
			controlNav: jQuery(this).hasClass('sc_slider_controls'),
			animation: 'fade',
			animationLoop: true,
			slideshow: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			pauseOnAction: true,
			pauseOnHover: true,
			useCSS: false,
			manualControls: ''
			/*
			start: function(slider){},
			before: function(slider){},
			after: function(slider){},
			end: function(slider){},              
			added: function(){},            
			removed: function(){} 
			*/
		});
	});
    }

    private stylePuzzlecolor() {
        var arrPuzzleColor = jQuery('[data-puzzlecolor]');
        console.log('# data puzzle color: ' + arrPuzzleColor.length);
        jQuery.each(arrPuzzleColor, function(index) {
            //            console.log('#' + index + ' data puzzle color');
            var puzzleColor = jQuery(this).attr('data-puzzlecolor');
            var clr = HomeComponent.HexToRGB(puzzleColor);
            jQuery(this).css("background-color", '#' + puzzleColor);
            jQuery(this).find('.reviews_summary').css("background-color", '#' + puzzleColor)
            jQuery(this).find('.post_content_padding').attr('style', 'background: -moz-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%, rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%, rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%);	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0)), color-stop(1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01)), color-stop(50%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1)));	background: -webkit-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%); background: -o-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%); background: -ms-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%);	background: linear-gradient(to bottom,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#00' + puzzleColor + '", endColorstr=' + puzzleColor + ',GradientType=0 );');
        });
    }

    private styleCategoryIconBg() {
        var arrCategoryIconBg = jQuery('[data-categoryiconbg]');
        jQuery.each(arrCategoryIconBg, function() {
            var CategoryIconBg = jQuery(this).attr('data-categoryiconbg');
            jQuery(this).css("background-color", '#' + CategoryIconBg)
        }
        );
    }

    private styleReview() {
        var arrReview = jQuery('[data-review]');
        jQuery.each(arrReview, function() {
            var reviewPercent = jQuery(this).attr('data-review');
            jQuery(this).css("width", reviewPercent + '%');
        }
        );
    }

    static HexToRGB(hex_clr: string) {
        "use strict";
        if (!/^\#?[\da-f]{6}$/i.test(hex_clr))
            return null;

        var color = (hex_clr.charAt(0) == "#") ? hex_clr.substring(1) : hex_clr;
        return {
            "r": parseInt(color.substring(0, 2), 16),
            "g": parseInt(color.substring(2, 4), 16),
            "b": parseInt(color.substring(4, 6), 16)
        }
    }

}
