import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    hostUrl: string = '';
    constructor() {
        this.hostUrl = 'http://localhost/portal-api/';
    }

    getApiRestUrl() {
        return this.hostUrl + 'web/';
    }

    getApiSoapUrl() {
        return this.hostUrl + 'web/api/';
    }
}
