import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(
  private gs: GlobalService
  ) { }

  ngOnInit() {
      this.gs.showSearch = false;
      this.gs.showContactForm = false;
  }

}
