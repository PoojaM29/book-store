import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppModule } from '../../../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { BookService } from '../../../core/services/book.service';
import { CartService } from '../../../core/services/cart.service';
import { HelperService } from '../../../core/services/helper.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let bookservice: BookService;
  let cartService: CartService;
  let helperService: HelperService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppModule,SharedModule, HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])],
      declarations: [ BookDetailsComponent ],
      providers:[{ provide: FormBuilder},
        {provide: APP_BASE_HREF, useValue : '/' },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // represents the bookId
              },
            },
          },
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookservice = fixture.debugElement.injector.get(BookService);
    helperService = fixture.debugElement.injector.get(HelperService);
    cartService = fixture.debugElement.injector.get(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const spy= spyOn(bookservice, "getSingleBook").and.returnValue(of([]));
  });

  it('should calculate rating', () => {
    const rating =1;
    component.calcRating(rating)
  });

  it('should call buy book', () => {
    const spy= spyOn(cartService, "addToCart").and.returnValue(of([]));
   // expect(spy).toHaveBeenCalled();
    component.buyBook();
  });
  
  it('should call add to favourite book', () => {
    const spy= spyOn(bookservice, "addToFavourites").and.returnValue(of([]));
   // expect(spy).toHaveBeenCalled();
    component.addToFavorites();
  });

  it('should call rate book', () => {
    component.isRated = false;
    const spy= spyOn(bookservice, "rateBook").and.callThrough();
   // expect(spy).toHaveBeenCalled();
   const rating = 4;
    component.rateBook(rating);
  });

  it('should call ratebook fail', () => {
    const spy= spyOn(bookservice, "rateBook").and.returnValue(throwError([]));

  });
});
