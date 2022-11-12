import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule  } from '@angular/router/testing';
describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [ HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
      declarations: [ BookComponent ],
      providers:[
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = { _id:'', title:'', author:'', genre:'', cover:'',year:22, description:'', isbn:'', pagesCount:1, price:1};
    fixture.detectChanges();
  });

  


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
