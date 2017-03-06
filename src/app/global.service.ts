import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {
    private inputSearch$ = new BehaviorSubject<string>('');
    private hostUrl: string = '';
    constructor() {
//        this.hostUrl = 'http://localhost/portal-api/';
        this.hostUrl = 'https://coarkpro.com/portal-api/';
    }

    set inputSearch(is: string) {
        this.inputSearch$.next(is);
    }

    get inputSearch() {
        return this.inputSearch$.getValue();
    }

    getApiRestUrl() {
        return this.hostUrl + 'web/';
    }

    getApiSoapUrl() {
        return this.hostUrl + 'web/api/';
    }
}