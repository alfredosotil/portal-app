import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GlobalService } from 'app/global.service';

@Injectable()
export class PropertyService {

    constructor(
        private g: GlobalService,
        private http: Http
    ) { }

    list() {
        return this.http.get(this.g.getApiRestUrl() + 'property?expand=state,type,agent,imagesProperties')
            .map(res => res.json());
    }

    search(query: string) {

    }

    view(id: string) {

    }

    create(o: {}) {

    }

    update(id: string) {

    }

    del(id: string) {

    }


}
