import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreComponent } from './book-store.component';
// Router
import { ActivatedRoute } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
// RXJS
import { Subscription } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
// Services
import { HelperService } from '../../../core/services/helper.service';
import { BookService } from '../../../core/services/book.service';
import { AppModule } from '../../../app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BookStoreComponent', () => {
  let component: BookStoreComponent;
  let fixture: ComponentFixture<BookStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule,NgxPaginationModule,ReactiveFormsModule],
      declarations: [BookStoreComponent],
      providers:[{provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
