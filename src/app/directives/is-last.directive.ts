import { Directive, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Directive({
    selector: '[isLast]'
})
export class IsLastDirective implements OnInit {

    @Input() isLast: boolean;
    @Output() lastDone: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor() { }
    ngOnInit() {
        if (this.isLast) {
            this.lastDone.emit(true);
        }
    }
}
