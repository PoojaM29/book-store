import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsComponent } from './receipts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule  } from '@angular/router/testing';
describe('ReceiptsComponent', () => {
  let component: ReceiptsComponent;
  let fixture: ComponentFixture<ReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [ HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
      declarations: [ ReceiptsComponent ],
      providers:[
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
