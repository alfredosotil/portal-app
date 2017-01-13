import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { PropertyService } from '../../services/property.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [PropertyService]
})
export class HomeComponent implements OnInit {

    properties = [];    

    constructor(private propertyService: PropertyService) {        
    }

    ngOnInit() {
        this.listProperties();
    }

    listProperties() {
        this.propertyService.list()
            .subscribe(
            data => this.properties = data,
            error => alert(error),
            () => console.log("# Finished list properties")
            );
    }

}
