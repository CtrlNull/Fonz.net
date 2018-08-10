/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamingServerComponent } from './gaming-server.component';

describe('GamingServerComponent', () => {
  let component: GamingServerComponent;
  let fixture: ComponentFixture<GamingServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
