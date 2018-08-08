/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnderContructionComponent } from './under-contruction.component';

describe('UnderContructionComponent', () => {
  let component: UnderContructionComponent;
  let fixture: ComponentFixture<UnderContructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderContructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderContructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
