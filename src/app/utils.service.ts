import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    constructor() { }

    public delay2(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public delay(ms: number) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            console.log("index:" + i);
            if ((new Date().getTime() - start) > ms) {
                break;
            }
        }
    }
    
    public getAllElementsWithAttribute(attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null) {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    }


}
