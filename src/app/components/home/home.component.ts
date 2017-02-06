import { Component, ViewChild, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PropertyService } from '../../services/property.service';
import { UtilsService } from 'app/utils.service';
import { GlobalService } from 'app/global.service';
declare var jQuery: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [PropertyService],
    //    directives: [IsLastDirective]

})
export class HomeComponent implements OnInit, AfterViewChecked {
    @ViewChild("myModalProperty") myModalProperty;
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

    ngAfterViewInit() {
    }

    ngAfterViewChecked() {
        this.stylePuzzlecolor();
        this.styleCategoryIconBg();
        this.styleReview();
        jQuery('.ui.rating').rating('disable');
        //        this.initSlider();
    }

    showModal(model: any) {
        this.setModel(model);
        this.initAccordion();
        this.styleCategoryIconBg();
        this.initSlider();
        jQuery('.ui.modal').modal('show');
        //        this.myModalProperty.show({
        //            blurring: true,
        //            //                        inverted: true
        //        });
    }

    getCurrency(money: any) {
        return (money === "D") ? 'USD' : 'PEN';
    }

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
        this.isLoading$.next(true);
        this.ps.list()
            .subscribe(
            data => this.properties = data,
            error => alert(error),
            () => this.isLoading$.next(false)
            );
    }

    private initAccordion() {
        jQuery('.accordion').accordion({
            exclusive: true,
            on: "mouseenter"
        });
    }

    public initSlider() {
        //Slider
        setTimeout(function() {
            var arrSlides = jQuery('[data-slide]');
            jQuery.each(arrSlides, function() {
                var slideUrl = jQuery(this).attr('data-slide');
                jQuery(this).css("background-image", "url(" + slideUrl + ")")
            });
            var arrSlideTextBg = jQuery('[data-slidetextbg]');
            jQuery.each(arrSlideTextBg, function() {
                var slideTextBg = jQuery(this).attr('data-slidetextbg');
                jQuery(this).css("background-color", slideTextBg)
            });

            jQuery('.sc_slider_flex').each(function() {
                "use strict";
                //            if (jQuery(this).hasClass('inited')) jQuery(this).removeData("flexslider");
                jQuery(this).removeData("flexslider");
                jQuery(this).flexslider({
                    directionNav: true,
                    prevText: '',
                    nextText: '',
                    controlNav: jQuery(this).hasClass('sc_slider_controls'),
                    animation: 'fade',
                    animationLoop: true,
                    slideshow: true,
                    slideshowSpeed: 5000,
                    animationSpeed: 500,
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
        }, 200);

    }

    private stylePuzzlecolor() {
        var arrPuzzleColor = jQuery('[data-puzzlecolor]');
        //        console.log('# data puzzle color: ' + arrPuzzleColor.length);
        jQuery.each(arrPuzzleColor, function(index) {
            var puzzleColor = jQuery(this).attr('data-puzzlecolor');
            var clr = HomeComponent.HexToRGB(puzzleColor);
            jQuery(this).css("background-color", '#' + puzzleColor);
            jQuery(this).find('.reviews_summary').css("background-color", '#' + puzzleColor)
            jQuery(this).find('.post_content_padding').attr('style', 'background: -moz-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%, rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%, rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%);	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0)), color-stop(1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01)), color-stop(50%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1)));	background: -webkit-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%); background: -o-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%); background: -ms-linear-gradient(top,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%);	background: linear-gradient(to bottom,  rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0) 0%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',0.01) 1%,rgba(' + clr.r + ',' + clr.g + ',' + clr.b + ',1) 50%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#00' + puzzleColor + '", endColorstr=' + puzzleColor + ',GradientType=0 );');
        });
    }

    private styleCategoryIconBg() {
        var arrCategoryIconBg = jQuery('[data-categoryiconbg]');
        //        console.log('# data Category Icon Bg: ' + arrCategoryIconBg.length);
        jQuery.each(arrCategoryIconBg, function() {
            var CategoryIconBg = jQuery(this).attr('data-categoryiconbg');
            jQuery(this).css("background-color", '#' + CategoryIconBg)
        }
        );
    }

    private styleReview() {
        var arrReview = jQuery('[data-review]');
        //        console.log('# data Review: ' + arrReview.length);
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

    setModel(model: any) {
        this.model = model;
    }
    getModel(): any {
        return this.model;
    }


}
