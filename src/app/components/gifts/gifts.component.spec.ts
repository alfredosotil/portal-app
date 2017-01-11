/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiftsComponent } from './gifts.component';

describe('GiftsComponent', () => {
  let component: GiftsComponent;
  let fixture: ComponentFixture<GiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
