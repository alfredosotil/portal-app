import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {
    private inputSearch$ = new BehaviorSubject<string>('');
    private showSearch$ = new BehaviorSubject<boolean>(true);
    private showContactForm$ = new BehaviorSubject<boolean>(true);
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
    
    set showSearch(s: boolean) {
        this.showSearch$.next(s);
    }

    get showSearch() {
        return this.showSearch$.getValue();
    }
    
    set showContactForm(s: boolean) {
        this.showContactForm$.next(s);
    }

    get showContactForm() {
        return this.showContactForm$.getValue();
    }

    getApiRestUrl() {
        return this.hostUrl + 'web/';
    }

    getApiSoapUrl() {
        return this.hostUrl + 'web/api/';
    }
}