import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[IsLast]'
})
export class IsLastDirective {

    constructor() { }
    @Input('init') onInit: Function = () => { };

    @Input() set ready(isReady: boolean) {
        if (isReady)
            setTimeout(() => this.onInit(), 200);
    };
}
