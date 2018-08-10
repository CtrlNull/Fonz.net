/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UbuntuServerInstallComponent } from './ubuntu-server-install.component';

describe('UbuntuServerInstallComponent', () => {
  let component: UbuntuServerInstallComponent;
  let fixture: ComponentFixture<UbuntuServerInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbuntuServerInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbuntuServerInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
