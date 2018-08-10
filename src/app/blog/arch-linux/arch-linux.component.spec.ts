/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArchLinuxComponent } from './arch-linux.component';

describe('ArchLinuxComponent', () => {
  let component: ArchLinuxComponent;
  let fixture: ComponentFixture<ArchLinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchLinuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
